"use client";

import { memo, useMemo } from "react";
import useQueryManager from "@/hooks/useQueryManager";

const DOTS = "…" as const;

export interface PaginationProps {
  totalItems: number;
  defaultLimit?: number;
  siblingCount?: number;
  scrollToTopOnChange?: boolean;
  className?: string;
  label?: string;
}


function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): (number | typeof DOTS)[] {
  const totalVisible = siblingCount * 2 + 5;

  if (totalVisible >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => i + 1,
    );
    return [...leftRange, DOTS, totalPages];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => totalPages - (3 + siblingCount * 2) + i + 1,
    );
    return [1, DOTS, ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i,
  );
  return [1, DOTS, ...middleRange, DOTS, totalPages];
}

function Pagination({
  totalItems,
  defaultLimit = 6,
  siblingCount = 1,
  scrollToTopOnChange = true,
  className = "",
  label = "Pagination",
}: PaginationProps) {
  const { getQuery, setQuery } = useQueryManager();
  const pageParam = "page";
  const  limitParam = "limit";
  const limit = Number(getQuery(limitParam)) || defaultLimit;
  const totalPages = Math.max(1, Math.ceil(totalItems / limit));

  const rawPage = Number(getQuery(pageParam)) || 1;
  const currentPage = Math.min(Math.max(rawPage, 1), totalPages);

  const range = useMemo(
    () => getPaginationRange(currentPage, totalPages, siblingCount),
    [currentPage, totalPages, siblingCount],
  );

  if (totalPages <= 1) return null;

  const goTo = (page: number) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    if (clamped === currentPage) return;
    setQuery(pageParam, clamped === 1 ? undefined : String(clamped));
  };

  return (
    <nav
      aria-label={label}
      className={`flex flex-col items-center gap-4 border-t border-primary/15 pt-6 sm:pt-10 ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.4em] text-primary/70">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] border border-primary/25 text-primary-light/70 transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-primary/25 disabled:hover:text-primary-light/70"
        >
          Prev
        </button>

        {range.map((item, i) =>
          item === DOTS ? (
            <span
              key={`dots-${i}`}
              aria-hidden="true"
              className="size-9 flex items-center justify-center text-[11px] text-primary-light/40 select-none"
            >
              {DOTS}
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => goTo(item)}
              aria-current={item === currentPage ? "page" : undefined}
              aria-label={`Page ${item}`}
              className={
                "size-9 text-[11px] tracking-[0.15em] transition-colors " +
                (item === currentPage
                  ? "bg-primary text-background"
                  : "border border-primary/25 text-primary-light/70 hover:border-primary hover:text-primary")
              }
            >
              {item.toString().padStart(2, "0")}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] border border-primary/25 text-primary-light/70 transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-primary/25 disabled:hover:text-primary-light/70"
        >
          Next
        </button>
      </div>
    </nav>
  );
}

export default memo(Pagination);
