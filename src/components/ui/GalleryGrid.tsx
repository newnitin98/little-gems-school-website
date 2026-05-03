"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { GalleryCategory, GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  items: GalleryItem[];
  categories: GalleryCategory[];
};

export function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const filterOptions: Array<GalleryCategory | "All"> = ["All", ...categories];

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {filterOptions.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
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
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedItem(item)}
            className={cn(
              "group overflow-hidden rounded-[28px] border border-primary/10 bg-white text-left shadow-card transition duration-300 hover:-translate-y-1",
              index % 4 === 0 && "lg:col-span-2",
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-light-bg">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <Badge className="bg-white/20 text-white">{item.category}</Badge>
                <h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedItem ? (
        <div className="fixed inset-0 z-[70] bg-primary/90 px-4 py-6 backdrop-blur">
          <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
            <div className="mb-4 flex items-center justify-between text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-secondary">
                  {selectedItem.category}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                aria-label="Close gallery preview"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-white/10 bg-white/10">
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
