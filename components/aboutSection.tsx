// components/AboutSection.tsx
"use client";
import React from "react";
import { Leaf, Mountain, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28  bg-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-24">
        {/* Hero Title + Image – Pure Flex (now fully visible on mobile) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ">
          {/* Left: Title */}

          <div className="flex-2 text-center   order-1">
            {/* Subheading */}
            <p className=" text-xs  sm:text-sm uppercase tracking-widest text-black  mb-8 font-medium">
              {/* Our Story · Our Soil · Our Soul */}
              ABOUT US
            </p>

            {/* <h1 className="text-3xl sm:text-5xl font-sans lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900">Rooted in Wayanad.</span>
              <span className="block text-amber-600 mt-3">
                Guided by Ayurveda.
              </span>
              <span className="block text-[#789b53] mt-3">
                Crafted with Love.
              </span>
            </h1> */}
          </div>

          {/* Right: Image – Now perfectly visible on small screens */}
          {/* <div className="w-full flex-1 max-w-xs sm:max-w-sm lg:max-w-md order-2 ">
            <div className="relative group">
             
              <div className="absolute -inset-3 bg-amber-300/20 rounded-3xl blur-3xl group-hover:bg-amber-400/30 transition duration-700"></div>

              <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-3xl shadow-2xl border-8 border-[#789b53]">
                <Image
                  src="/images/farm.jpg"
                  alt="Wayanad harvest – Indian Spices House"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 500px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-white text-sm font-medium tracking-wide">
                    Harvested with care in Wayanad
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Rest of the content – 100% unchanged */}
        {/* <div className="mt-20 lg:mt-28 max-w-3xl mx-auto text-center"> */}
        <div className="lg:mt-2 max-w-3xl mx-auto text-center">
          <div className="text-lg sm:text-xl text-amber-800 space-y-8 leading-relaxed">
            <p>
              Indian Spices House was born in the misty hills of{" "}
              <span className="font-semibold text-gray-900">
                Wayanad, Kerala
              </span>{" "}
              — where the soil is alive, the air is pure, and every harvest
              carries the wisdom of generations.
            </p>
            <p>
              Founded and led by{" "}
              <span className="font-bold text-emerald-800">Dr. Sreedevi</span>,
              a passionate Ayurvedic physician and the heart of our brand, we
              began as a quiet home venture — sharing small batches of golden
              turmeric powder and virgin coconut oil with loved ones.
            </p>
            <p>
              What started in our kitchen soon became stories of transformation.
              People felt the difference. They tasted purity. They experienced
              wellness in its truest form.
            </p>
          </div>

          {/* Quote */}
          <div className="my-16 bg-white/95 backdrop-blur-sm border border-amber-100  p-10 lg:p-5 max-w-4xl mx-auto">
            <p className="text-2xl lg:text-3xl italic text-gray-800 leading-relaxed">
              “We don’t just sell spices and oils.
              <br />
              <span className="font-semibold text-amber-600">
                We preserve a way of life.
              </span>
              ”
            </p>
            <p className="mt-6 text-right text-emerald-700 font-medium text-lg">
              — Dr. Sreedevi
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Mountain className="w-12 h-12 text-amber-600 mb-4" />
              <p className="font-semibold text-gray-800">
                Own Farms in Wayanad
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Leaf className="w-12 h-12 text-emerald-600 mb-4" />
              <p className="font-semibold text-gray-800">
                Organic & Regenerative
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <p className="font-semibold text-gray-800">
                Family-Grown with Love
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-20 lg:mt-28 font-sans text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
            <p>From our soil to your soul —</p>
            <p className="mt-4 font-bold text-amber-600">
              This is not just food.
            </p>
            <p className="mt-3 text-emerald-700">
              This is medicine. This is heritage. This is home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
