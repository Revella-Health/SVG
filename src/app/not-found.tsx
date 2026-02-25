import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center text-center px-6"
      style={{
        background: "linear-gradient(135deg, #001631 0%, #002B5C 50%, #0052A5 100%)",
      }}
    >
      <div>
        <h1 className="font-display text-[clamp(48px,10vw,96px)] font-bold text-white/20 leading-none mb-4">
          404
        </h1>
        <h2 className="font-display text-[clamp(20px,3vw,28px)] font-semibold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-white/50 text-[15px] mb-8 max-w-[400px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold bg-gold text-deep-navy no-underline hover:bg-gold-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
