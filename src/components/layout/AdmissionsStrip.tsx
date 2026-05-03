import { Phone } from "lucide-react";
import { schoolInfo } from "@/data/school";

export function AdmissionsStrip() {
  const stripText = `${schoolInfo.admissions} • Call ${schoolInfo.phoneNumbers[0]} or ${schoolInfo.phoneNumbers[1]} to schedule a visit`;

  return (
    <div className="border-b border-secondary/20 bg-secondary text-primary">
      <div className="mx-auto hidden max-w-7xl items-center justify-center gap-3 px-4 py-2 text-center text-sm font-semibold sm:flex">
        <Phone className="h-4 w-4" />
        <span>{stripText}</span>
        <span className="ml-1 rounded-full bg-accent/20 px-3 py-0.5 text-xs font-bold text-accent">
          Limited Seats
        </span>
      </div>
      <div className="overflow-hidden sm:hidden">
        <div className="marquee-track motion-safe:animate-marquee whitespace-nowrap py-2 text-sm font-semibold">
          <span className="px-4">{stripText} — Limited Seats</span>
          <span className="px-4">{stripText} — Limited Seats</span>
        </div>
      </div>
    </div>
  );
}
