// app/components/CTABanner.tsx
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-16 bg-amber-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className=" text-3xl font-sans md:text-4xl font-bold text-white mb-4">
          Ready to Elevate Your Cooking?
        </h2>
        {/* <p className="text-amber-100  mb-8 max-w-xl mx-auto">
          Start with our best-selling spice kit – perfect for gifting or trying everything.
        </p> */}
        <Link
          href="/contact"
          className="inline-block px-12 py-4 bg-white text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}