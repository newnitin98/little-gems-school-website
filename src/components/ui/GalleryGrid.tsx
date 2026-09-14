"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Images, Link2, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type {
  GalleryAlbum,
  GalleryCategory,
  GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  items: GalleryItem[];
  categories: GalleryCategory[];
  albums?: GalleryAlbum[];
};

type LightboxImage = { src: string; alt: string; focalPoint?: string };

type Lightbox = {
  kind: "item" | "album";
  refId: string;
  title: string;
  category: GalleryCategory;
  images: LightboxImage[];
  index: number;
};

type AlbumCard = { kind: "album"; key: string; album: GalleryAlbum };
type ItemCard = { kind: "item"; key: string; item: GalleryItem };
type GalleryCard = AlbumCard | ItemCard;

export function GalleryGrid({ items, categories, albums = [] }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);
  const [copied, setCopied] = useState(false);
  const filterOptions: Array<GalleryCategory | "All"> = ["All", ...categories];

  const cards = useMemo<GalleryCard[]>(() => {
    const albumCards: GalleryCard[] = albums
      .filter((album) => activeCategory === "All" || album.category === activeCategory)
      .map((album) => ({ kind: "album", key: `album-${album.id}`, album }));

    const itemCards: GalleryCard[] = items
      .filter((item) => activeCategory === "All" || item.category === activeCategory)
      .map((item) => ({ kind: "item", key: `item-${item.id}`, item }));

    return [...albumCards, ...itemCards];
  }, [activeCategory, albums, items]);

  const openItem = useCallback(
    (item: GalleryItem) =>
      setLightbox({
        kind: "item",
        refId: item.id,
        title: item.title,
        category: item.category,
        images: [{ src: item.src, alt: item.alt, focalPoint: item.focalPoint }],
        index: 0,
      }),
    [],
  );

  const openAlbum = useCallback(
    (album: GalleryAlbum, startIndex = 0) =>
      setLightbox({
        kind: "album",
        refId: album.id,
        title: album.title,
        category: album.category,
        images: album.images,
        index: Math.min(Math.max(startIndex, 0), album.images.length - 1),
      }),
    [],
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const step = useCallback((direction: 1 | -1) => {
    setLightbox((current) => {
      if (!current) return current;
      const total = current.images.length;
      const nextIndex = (current.index + direction + total) % total;
      return { ...current, index: nextIndex };
    });
  }, []);

  // Open a photo directly when the page is loaded from a shared deep link.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get("item");
    const albumId = params.get("album");

    if (itemId) {
      const item = items.find((entry) => entry.id === itemId);
      if (item) openItem(item);
    } else if (albumId) {
      const album = albums.find((entry) => entry.id === albumId);
      if (album) {
        const photo = Number(params.get("photo")) || 1;
        openAlbum(album, photo - 1);
      }
    }
    // Run once on mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the URL in sync so the current photo is always shareable / copyable.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const base = window.location.pathname;

    if (!lightbox) {
      if (/[?&](item|album|photo)=/.test(window.location.search)) {
        window.history.replaceState(null, "", base);
      }
      return;
    }

    const params = new URLSearchParams();
    if (lightbox.kind === "item") {
      params.set("item", lightbox.refId);
    } else {
      params.set("album", lightbox.refId);
      params.set("photo", String(lightbox.index + 1));
    }
    window.history.replaceState(null, "", `${base}?${params.toString()}`);
    setCopied(false);
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightbox, closeLightbox, step]);

  const copyLink = useCallback(async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;

    const legacyCopy = () => {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        return ok;
      } catch {
        return false;
      }
    };

    let succeeded = false;
    try {
      await navigator.clipboard.writeText(url);
      succeeded = true;
    } catch {
      succeeded = legacyCopy();
    }

    if (succeeded) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const active = lightbox ? lightbox.images[lightbox.index] : null;
  const hasMultiple = lightbox ? lightbox.images.length > 1 : false;

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {filterOptions.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-white text-primary shadow-card hover:bg-light-bg",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => {
          const isWide = index % 4 === 0;

          if (card.kind === "album") {
            const { album } = card;
            return (
              <button
                key={card.key}
                type="button"
                onClick={() => openAlbum(album)}
                aria-label={`Open ${album.title} album with ${album.images.length} photos`}
                className={cn(
                  "group overflow-hidden rounded-[28px] border border-primary/10 bg-white text-left shadow-card transition duration-300 hover:-translate-y-1",
                  isWide && "lg:col-span-2",
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-light-bg">
                  <Image
                    src={album.cover}
                    alt={album.coverAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: album.coverFocalPoint ?? "50% 50%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/15 to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-primary shadow-card backdrop-blur">
                    <Images className="h-3.5 w-3.5" aria-hidden="true" />
                    {album.images.length} photos
                  </span>
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <Badge className="bg-white/20 text-white">{album.category}</Badge>
                    <h3 className="mt-3 font-heading text-xl font-semibold">{album.title}</h3>
                  </div>
                </div>
              </button>
            );
          }

          const { item } = card;
          return (
            <button
              key={card.key}
              type="button"
              onClick={() => openItem(item)}
              className={cn(
                "group overflow-hidden rounded-[28px] border border-primary/10 bg-white text-left shadow-card transition duration-300 hover:-translate-y-1",
                isWide && "lg:col-span-2",
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-light-bg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.focalPoint ?? "50% 50%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <Badge className="bg-white/20 text-white">{item.category}</Badge>
                  <h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {lightbox && active ? (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-primary/95 px-4 py-6 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="mx-auto flex h-full w-full max-w-5xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.22em] text-secondary">
                  {lightbox.category}
                </p>
                <h3 className="mt-2 truncate font-heading text-2xl font-semibold">
                  {lightbox.title}
                  {hasMultiple ? (
                    <span className="ml-3 align-middle text-base font-normal text-white/70">
                      {lightbox.index + 1} / {lightbox.images.length}
                    </span>
                  ) : null}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-semibold transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  aria-label="Copy shareable link to this photo"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-secondary" aria-hidden="true" />
                      <span className="hidden sm:inline">Link copied</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="h-4 w-4" aria-hidden="true" />
                      <span className="hidden sm:inline">Copy link</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  aria-label="Close gallery preview"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
              <Image
                key={active.src}
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                style={{ objectPosition: active.focalPoint ?? "50% 50%" }}
                priority
              />

              {hasMultiple ? (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-card transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-card transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              ) : null}
            </div>

            {hasMultiple ? (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {lightbox.images.map((image, thumbIndex) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() =>
                      setLightbox((current) =>
                        current ? { ...current, index: thumbIndex } : current,
                      )
                    }
                    aria-label={`View photo ${thumbIndex + 1}`}
                    aria-current={thumbIndex === lightbox.index}
                    className={cn(
                      "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                      thumbIndex === lightbox.index
                        ? "border-secondary"
                        : "border-transparent opacity-70 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                      style={{ objectPosition: image.focalPoint ?? "50% 50%" }}
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
