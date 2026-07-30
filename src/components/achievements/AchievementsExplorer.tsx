"use client";

import { useId, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import {
  achievements,
  activeCategories,
  categoryLabels,
  type AchievementCategory,
} from "@/data/achievements";
import { cn } from "@/lib/utils";

type FilterValue = "all" | AchievementCategory;
type SortValue = "newest" | "oldest" | "competition" | "alphabetical";

const sortOptions: { value: SortValue; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "competition", label: "Competition" },
  { value: "alphabetical", label: "Alphabetical" },
];

export function AchievementsExplorer() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortValue>("newest");
  const searchId = useId();
  const sortId = useId();

  const filterChips: FilterValue[] = ["all", ...activeCategories];

  const visibleItems = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();

    const filtered = achievements.filter((item) => {
      const matchesCategory =
        activeFilter === "all" || item.category === activeFilter;
      if (!matchesCategory) return false;
      if (!normalisedQuery) return true;

      const haystack = [
        item.studentName,
        item.className ?? "",
        item.competition,
        item.achievement,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalisedQuery);
    });

    const sorted = [...filtered];
    sorted.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.year - a.year || a.studentName.localeCompare(b.studentName);
        case "oldest":
          return a.year - b.year || a.studentName.localeCompare(b.studentName);
        case "competition":
          return (
            a.competition.localeCompare(b.competition) ||
            a.studentName.localeCompare(b.studentName)
          );
        case "alphabetical":
          return a.studentName.localeCompare(b.studentName);
        default:
          return 0;
      }
    });

    return sorted;
  }, [activeFilter, query, sortBy]);

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter achievements by category"
        >
          {filterChips.map((chip) => {
            const isActive = activeFilter === chip;
            const label = chip === "all" ? "All" : categoryLabels[chip];
            return (
              <button
                key={chip}
                type="button"
                onClick={() => setActiveFilter(chip)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white text-primary shadow-card hover:bg-light-bg",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <label htmlFor={searchId} className="sr-only">
              Search achievements by student, class, or competition
            </label>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtext"
              aria-hidden="true"
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search students or competitions"
              className="h-11 w-full rounded-full border border-primary/15 bg-white pl-9 pr-4 text-sm text-body-text shadow-card outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-accent sm:w-72"
            />
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor={sortId}
              className="text-sm font-medium text-subtext"
            >
              Sort
            </label>
            <select
              id={sortId}
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortValue)}
              className="h-11 rounded-full border border-primary/15 bg-white px-4 text-sm font-medium text-primary shadow-card outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-accent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-subtext" aria-live="polite">
        Showing {visibleItems.length}{" "}
        {visibleItems.length === 1 ? "achievement" : "achievements"}
      </p>

      {visibleItems.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[24px] border border-primary/10 bg-white p-10 text-center shadow-card">
          <p className="font-heading text-lg font-semibold text-primary">
            No achievements found
          </p>
          <p className="mt-2 text-sm text-subtext">
            Try a different category or search term.
          </p>
        </div>
      )}
    </div>
  );
}
