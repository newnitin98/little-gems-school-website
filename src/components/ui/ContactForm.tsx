"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormValues = {
  parentName: string;
  childName: string;
  childAge: string;
  classApplying: string;
  phone: string;
  message: string;
  website: string; // honeypot — must stay empty; hidden from real users
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  parentName: "",
  childName: "",
  childAge: "",
  classApplying: "",
  phone: "",
  message: "",
  website: "", // honeypot — always empty for real users
};

const classOptions = [
  "Pre-Nursery",
  "Nursery",
  "KG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
];

const ageOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const textFields = useMemo(
    () => [
      {
        id: "parentName",
        label: "Parent Name",
        type: "text",
        placeholder: "Enter parent or guardian name",
      },
      {
        id: "childName",
        label: "Child Name",
        type: "text",
        placeholder: "Enter child name",
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter 10-digit phone number",
      },
    ] as const,
    [],
  );

  function validate(nextValues: FormValues) {
    const nextErrors: FormErrors = {};

    if (!nextValues.parentName.trim()) {
      nextErrors.parentName = "Please enter the parent name.";
    }

    if (!nextValues.childName.trim()) {
      nextErrors.childName = "Please enter the child name.";
    }

    if (!nextValues.childAge.trim()) {
      nextErrors.childAge = "Please select the child's age.";
    }

    if (!nextValues.classApplying.trim()) {
      nextErrors.classApplying = "Please choose a class.";
    }

    if (!/^\d{10}$/.test(nextValues.phone.trim())) {
      nextErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    return nextErrors;
  }

  function handleChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (whatsappUrl) {
      setWhatsappUrl("");
    }
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please review the highlighted fields and try again.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as {
        error?: string;
        whatsappUrl?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send enquiry.");
      }

      setValues(initialValues);
      setWhatsappUrl(result.whatsappUrl ?? "");
      setStatus({
        type: "success",
        message: "Thank you! Your enquiry has been submitted successfully. Our admissions team will contact you shortly.",
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your enquiry. Please call the school directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-primary/10 bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="relative grid gap-5 sm:grid-cols-2">
        {textFields.map((field) => (
          <label key={field.id} className="space-y-2 text-sm font-medium text-body-text">
            <span>{field.label}</span>
            <input
              type={field.type}
              value={values[field.id]}
              onChange={(event) => handleChange(field.id, event.target.value)}
              placeholder={field.placeholder}
              className={cn(
                "h-12 w-full rounded-2xl border bg-light-bg px-4 text-sm outline-none transition focus:border-primary focus:bg-white",
                errors[field.id] && "border-red-500",
              )}
            />
            {errors[field.id] ? (
              <p className="text-xs text-red-600">{errors[field.id]}</p>
            ) : null}
          </label>
        ))}

        <label className="space-y-2 text-sm font-medium text-body-text">
          <span>Child Age</span>
          <select
            value={values.childAge}
            onChange={(event) => handleChange("childAge", event.target.value)}
            className={cn(
              "h-12 w-full rounded-2xl border bg-light-bg px-4 text-sm outline-none transition focus:border-primary focus:bg-white",
              errors.childAge && "border-red-500",
            )}
          >
            <option value="">Select age</option>
            {ageOptions.map((age) => (
              <option key={age} value={String(age)}>
                {age} {age === 1 ? "year" : "years"}
              </option>
            ))}
          </select>
          {errors.childAge ? (
            <p className="text-xs text-red-600">{errors.childAge}</p>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-medium text-body-text">
          <span>Class Applying For</span>
          <select
            value={values.classApplying}
            onChange={(event) => handleChange("classApplying", event.target.value)}
            className={cn(
              "h-12 w-full rounded-2xl border bg-light-bg px-4 text-sm outline-none transition focus:border-primary focus:bg-white",
              errors.classApplying && "border-red-500",
            )}
          >
            <option value="">Select a class</option>
            {classOptions.map((classOption) => (
              <option key={classOption} value={classOption}>
                {classOption}
              </option>
            ))}
          </select>
          {errors.classApplying ? (
            <p className="text-xs text-red-600">{errors.classApplying}</p>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-medium text-body-text sm:col-span-2">
          <span>Message</span>
          <textarea
            value={values.message}
            onChange={(event) => handleChange("message", event.target.value)}
            placeholder="Tell us anything you would like the school to know."
            rows={4}
            className="w-full rounded-2xl border bg-light-bg px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white"
          />
        </label>
        {/* Honeypot — hidden from real users; bots fill it and get silently blocked */}
        <label aria-hidden="true" className="absolute -left-[9999px] -top-[9999px] overflow-hidden">
          <span>Leave this empty</span>
          <input
            type="text"
            name="website"
            value={values.website}
            onChange={(e) => handleChange("website", e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <p className="mt-4 text-xs text-subtext">
        🔒 Your details are used only to contact you about admissions. We respond within one school working day.
      </p>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" disabled={isSubmitting} className="min-w-[180px]">
            {isSubmitting ? "Sending enquiry..." : "Submit Enquiry"}
          </Button>
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white transition hover:bg-[#128C7E]"
            >
              Chat on WhatsApp
            </a>
          ) : null}
        </div>
        {status.type !== "idle" ? (
          <p
            className={cn(
              "text-sm leading-6",
              status.type === "success" ? "text-success" : "text-red-600",
            )}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
