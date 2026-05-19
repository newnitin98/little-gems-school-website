import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { footerLinks } from "@/data/navigation";
import { schoolInfo } from "@/data/school";

const socialIconMap = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
} as const;

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr,1fr,1fr,1fr] lg:px-8">
        <div>
          <Image
            src="/images/logos/little-gems-logo.jpeg"
            alt="Little Gems School logo"
            width={1600}
            height={1037}
            className="h-12 w-auto rounded-xl sm:h-14"
          />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
            {schoolInfo.footer.description}
          </p>
          <p className="mt-1 text-sm text-white/50">लिटिल जेम्स स्कूल, जबलपुर, मध्य प्रदेश</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {schoolInfo.socialLinks.map((social) => {
              const Icon = socialIconMap[social.platform];

              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-secondary hover:text-secondary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Contact Info</h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
            <li>{schoolInfo.address}</li>
            <li>
              <a href={`tel:91${schoolInfo.phoneNumbers[0]}`} className="hover:text-secondary">
                {schoolInfo.phoneNumbers[0]}
              </a>
            </li>
            <li>
              <a href={`tel:91${schoolInfo.phoneNumbers[1]}`} className="hover:text-secondary">
                {schoolInfo.phoneNumbers[1]}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">School Hours</h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
            {schoolInfo.footer.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:pl-8 lg:pr-44">
          <p>© {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
          <p>
            Website designed and developed by{" "}
            <a
              href="https://pixelniti.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition hover:text-white/90"
            >
              PixelNiti
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
