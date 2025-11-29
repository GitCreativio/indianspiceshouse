"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Props = { images: string[] };

export default function ProductSlider({ images }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-xl mx-auto pt-32"
    >
      <Swiper
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className=" overflow-hidden h-[450px]"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="relative h-full">
            <Image
              src={img}
              alt={`Product Image ${idx + 1}`}
              fill
              className="object-contain p-5"
              priority={idx === 0} // Only first image priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
