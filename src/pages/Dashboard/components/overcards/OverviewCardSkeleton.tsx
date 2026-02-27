export const OverviewCardSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="h-64 w-full animate-pulse rounded-4xl bg-gray-800/50"
      />
    ))}
  </div>
);
