import { MessageCircle } from "lucide-react";
import { schoolInfo } from "@/data/school";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${schoolInfo.name}, I would like to enquire about admissions for my child.`,
  );

  return (
    <a
      href={`https://wa.me/${schoolInfo.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:bg-[#1fb459]"
      aria-label="Chat with Little Gems School on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
