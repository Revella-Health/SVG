"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center text-center px-6"
      style={{
        background: "linear-gradient(135deg, #001631 0%, #002B5C 50%, #0052A5 100%)",
      }}
    >
      <div>
        <h2 className="font-display text-[clamp(20px,3vw,28px)] font-semibold text-white mb-3">
          Something went wrong
        </h2>
        <p className="text-white/50 text-[15px] mb-8 max-w-[400px] mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold bg-gold text-deep-navy border-none cursor-pointer hover:bg-gold-dark transition-colors"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
