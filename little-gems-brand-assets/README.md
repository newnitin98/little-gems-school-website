# Little Gems School — Brand Asset Pack

## What's inside

### Favicons (drop into `/public` of your Next.js project)
- `favicon.ico` — multi-res ICO (16/32/48) — for legacy browser tabs
- `favicon.svg` — scalable vector favicon (modern browsers)
- `favicon-16x16.png` through `favicon-512x512.png` — all standard sizes
- `apple-touch-icon.png` (180×180) — iOS home screen icon
- `android-chrome-192x192.png` & `android-chrome-512x512.png` — Android / PWA
- `site.webmanifest` — PWA manifest

### Full logo (for header, footer, emails)
- `logo-full.svg` — vector (use this everywhere you can)
- `logo-full-400w.png` / `logo-full-800w.png` / `logo-full-1200w.png` — raster fallbacks

### Logo mark only (balloon with "LG")
- `logo-mark.svg` — vector
- `logo-mark-256.png` / `logo-mark-512.png` / `logo-mark-1024.png`

---

## How to install in Next.js (App Router)

### 1. Drop these files in `/public/`:
```
favicon.ico
favicon.svg
apple-touch-icon.png
android-chrome-192x192.png
android-chrome-512x512.png
site.webmanifest
logo-full.svg
logo-mark.svg
```

### 2. In `app/layout.tsx`, add the metadata:
```tsx
export const metadata: Metadata = {
  title: "Little Gems School — Jabalpur",
  description: "A joyful English-medium school in Jabalpur for curious young minds. Pre-Nursery to Class 5.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#FFD400",
};
```

### 3. Use the full logo in your header component:
```tsx
import Image from "next/image";

<Image
  src="/logo-full.svg"
  alt="Little Gems School"
  width={200}
  height={125}
  priority
/>
```

---

## Brand colors (for reference in your Tailwind config)

```js
// tailwind.config.ts
colors: {
  brand: {
    red:    "#E3242B",  // "little" text, balloon, G
    yellow: "#FFD400",  // primary bg / M
    blue:   "#1B9CE0",  // E
    green:  "#6FBE44",  // S
    ink:    "#1A1A1A",  // "SCHOOL" text, outlines
  }
}
```
