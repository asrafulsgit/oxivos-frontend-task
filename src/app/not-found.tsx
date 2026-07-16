export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-primary">
          404
        </p>
        <h1 className="mb-4 font-display text-3xl sm:text-5xl text-primary-light">
          Not Found
        </h1>
        <p className="mb-6 text-sm text-primary-light/60">
          This piece has moved on. Return to the atelier.
        </p>
        <a
          href="/"
          className="text-[11px] uppercase tracking-[0.25em] text-primary border-b border-primary/40 pb-1 hover:text-primary-light"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
