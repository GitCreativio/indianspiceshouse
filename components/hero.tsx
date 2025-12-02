// app/components/Hero.tsx
import { hero } from "../public/base64/hero";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center   px-5 sm:px-10 md:px-24   overflow-hidden bg-cover bg-center  md:bg-right bg-fixed"
      style={{ backgroundImage: `url('${hero}')` }}
    >
      {/* Deep cinematic overlay – keeps focus on text */}
      <div className="absolute inset-0 bg-linear-to-br md:from-black/50 from-black/50 to-black/50     md:to-transparent" />

      <div className="relative z-10  max-w-6xl ">
        {/* Hero Statement – Powerful color progression */}
        <div className="opacity-0 animate-fadeInUp animation-delay-600">
          <h2 className="text-6xl font-sans  md:text-8xl 2xl:text-9xl  font-bold leading-tight">
            <span className=" text-amber-100 block md:inline mr-2">Pure.</span>
            <span className=" text-amber-100  tracking-tight">Aromatic.</span>
            <span className=" block text-amber-100 drop-shadow-2xl">
              Authentic.
            </span>
          </h2>
        </div>

        {/* Trust badges */}
        <p className="mt-5 text-[#fdd016]/80 text-xs  sm:text-sm  tracking-widest uppercase font-medium opacity-0 animate-fadeInUp animation-delay-1500">
          Organic • Homemade • Family-Owned
        </p>
      </div>

      {/* Scroll indicator in brand gold */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-100/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-100 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
