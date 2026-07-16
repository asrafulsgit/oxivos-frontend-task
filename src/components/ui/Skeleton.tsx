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
