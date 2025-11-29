// app/components/PremiumHeroSections.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PremiumHeroSections() {
  return (
    <div id="products" className=" bg-amber-50">
      {/* ==================== TURMERIC HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center  overflow-hidden">
        {/* Background decorative */}
        {/* <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
        </div> */}

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid  md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-center order-2 md:order-1 md:text-left space-y-5">
            <p className="text-black font-medium tracking-widest uppercase text-xs md:text-sm">
              Single-Origin • Small Batch
            </p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-yellow-500 leading-tight">
              <span className="text-yellow-500">Turmeric Powder</span>
            </h1>

            <p className="md:text-xl text-black max-w-lg leading-relaxed">
              Hand-harvested from high-curcumin Lakadong variety roots.
              Cold-dried at source. 4.8–6.2% curcumin — among the highest in the
              world.
            </p>

            <div className="py-8">
              <div className="text-6xl font-light text-yellow-500">₹60</div>
              <div className="text-black text-xs md:text-base tracking-wider">
                per 100g • Glass Jar • Organic Certified
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://wa.me/+919539769967"
                target="_blank"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition shadow-xl"
              >
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
              </a>
              <Link
                href="/learn/turmeric"
                className="inline-flex items-center gap-2 px-8 py-5 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-600 hover:text-white transition"
              >
                Learn More
              </Link>
            </div>

            <div className="flex justify-center md:justify-start gap-8 text-sm text-yellow-500 pt-8">
              <span>100% Organic</span>
              <span>No Additives</span>
              <span>Lab Tested</span>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative order-1 md:order-2 h-96 md:h-full min-h-96">
            <Image
              src="/images/turmeric.png"
              alt="Premium Lakshadweep Turmeric Powder"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ==================== COCONUT OIL HERO SECTION ==================== */}
      <section className="relative min-h-screen  flex items-center justify-center  overflow-hidden">
        {/* Background decorative */}
        {/* <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 right-32 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-300 rounded-full blur-3xl"></div>
        </div> */}

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image First on Mobile */}
          <div className="order-2 md:order-1 relative h-96 md:h-full min-h-96">
            <Image
              src="/images/oil.jpg"
              alt="Hot-Pressed Virgin Coconut Oil"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2 text-center md:text-left space-y-5">
            <p className="text-black font-medium tracking-widest uppercase text-xs md:text-sm">
              First Press • Within 2 Hours of Harvest
            </p>
            <h1 className="font-sans text-4xl md:text-5xl  font-bold text-[#719a4b] leading-tight">
              Hot-Pressed
              <br />
              <span className="text-[#719a4b]">Virgin Coconut Oil</span>
            </h1>

            <p className="md:text-xl text-black max-w-lg leading-relaxed">
              Extracted from fresh Kerala coconuts using traditional wooden
              ghani. Raw, unrefined, and naturally fragrant — just like nature
              intended.
            </p>

            <div className="py-8">
              <div className="text-6xl font-light text-[#719a4b]">₹60</div>
              <div className="text-black text-xs md:text-base tracking-wider">
                per 100ml • UV-Protected Glass Bottle
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://wa.me/+919539769967"
                target="_blank"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-[#719a4b] text-white rounded-full hover:bg-[#52772f] transition shadow-xl"
              >
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
              </a>
              <Link
                href="/learn/coconut-oil"
                className="inline-flex items-center gap-2 px-8 py-5 border-2 border-[#719a4b] text-[#719a4b] rounded-full hover:bg-[#52772f] hover:text-white transition"
              >
                Learn More
              </Link>
            </div>

            <div className="flex justify-center md:justify-start gap-8 text-sm text-[#719a4b] pt-8">
              <span>Cold-Pressed</span>
              <span>Unrefined</span>
              <span>Zero Heat</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
