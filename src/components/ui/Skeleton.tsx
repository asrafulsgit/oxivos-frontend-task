export function SkeletonCard() {
  return (
    <div className="animate-fade-in">
      <div className="skeleton mb-5 aspect-[3/4] w-full" />
      <div className="skeleton mb-2 h-3 w-1/3" />
      <div className="skeleton mb-2 h-5 w-2/3" />
      <div className="skeleton h-3 w-1/4" />
    </div>
  );
}

export function SkeletonGrid({ n = 6 }: { n?: number }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: n }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function CartSkeleton() {
  return (
    <div className="mx-auto max-w-6xl animate-fade-in px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="skeleton mb-3 h-3 w-20" />
          <div className="skeleton h-12 w-44" />
        </div>

        <div className="skeleton h-3 w-24" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
        {/* Cart Items */}
        <ul className="divide-y divide-primary/10 border-y border-primary/10">
          {[...Array(3)].map((_, index) => (
            <li
              key={index}
              className="grid grid-cols-[96px_1fr_auto] items-start gap-6 py-6 sm:grid-cols-[120px_1fr_auto]"
            >
              {/* Image */}
              <div className="skeleton aspect-[3/4] w-full" />

              {/* Content */}
              <div className="min-w-0">
                <div className="skeleton mb-3 h-6 w-2/3" />
                <div className="skeleton mb-5 h-3 w-1/2" />

                {/* Quantity Stepper */}
                <div className="flex items-center gap-3">
                  <div className="skeleton h-9 w-9 rounded-full" />
                  <div className="skeleton h-6 w-10" />
                  <div className="skeleton h-9 w-9 rounded-full" />
                </div>
              </div>

              {/* Price & Remove */}
              <div className="flex h-full flex-col items-end justify-between">
                <div className="skeleton h-5 w-5 rounded-full" />
                <div className="skeleton h-5 w-20" />
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <aside className="h-fit border border-primary/15 p-8">
          <div className="skeleton mb-6 h-3 w-20" />

          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="skeleton h-4 w-20" />
              <div className="skeleton h-4 w-24" />
            </div>

            <div className="flex justify-between">
              <div className="skeleton h-4 w-16" />
              <div className="skeleton h-4 w-20" />
            </div>
          </div>

          <div className="my-6 h-px bg-primary/20" />

          <div className="mb-6 flex items-end justify-between">
            <div className="skeleton h-3 w-12" />
            <div className="skeleton h-9 w-32" />
          </div>

          <div className="skeleton h-12 w-full" />
          <div className="skeleton mx-auto mt-4 h-4 w-40" />
        </aside>
      </div>
    </div>
  );
}

export function ProductDetailsSkeleton() {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="skeleton aspect-[3/4] w-full" />

          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="skeleton aspect-square w-full" />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:pt-4">
          {/* Eyebrow */}
          <div className="skeleton mb-3 h-3 w-24" />

          {/* Title */}
          <div className="skeleton mb-3 h-12 w-3/4" />
          <div className="skeleton mb-6 h-12 w-1/2" />

          {/* Price & Rating */}
          <div className="mb-6 flex items-center gap-4">
            <div className="skeleton h-7 w-28" />
            <div className="skeleton h-5 w-14" />
          </div>

          {/* Description */}
          <div className="mb-10 space-y-3">
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-11/12" />
            <div className="skeleton h-4 w-5/6" />
            <div className="skeleton h-4 w-2/3" />
          </div>

          {/* Colors */}
          <div className="mb-6">
            <div className="skeleton mb-3 h-3 w-32" />

            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="skeleton h-10 w-20" />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <div className="skeleton mb-3 h-3 w-28" />

            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="skeleton h-10 w-14" />
              ))}
            </div>
          </div>

          {/* Quantity + Button */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="skeleton h-10 w-10 rounded-full" />
              <div className="skeleton h-6 w-8" />
              <div className="skeleton h-10 w-10 rounded-full" />
            </div>

            <div className="skeleton h-14 min-w-56 flex-1" />
          </div>

          {/* Success message placeholder */}
          <div className="skeleton mb-10 h-4 w-40" />

          {/* Footer Info */}
          <div className="mt-10 border-t border-primary/10 pt-6 space-y-3">
            <div className="skeleton h-3 w-2/3" />
            <div className="skeleton h-3 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
