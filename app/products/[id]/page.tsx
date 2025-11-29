// app/product/[id]/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, CheckCircle2 } from "lucide-react";
import ProductSlider from "@/components/productSlider";
import Badge from "@/components/badge";

export default function ProductViewPage() {
  const product = {
    name: "Turmeric Powder",
    price: 60,
    weight: "100g",
    description:
      "Hand-harvested from high-curcumin Lakadong variety roots. Cold-dried at source. 4.8–6.2% curcumin — among the highest in the world.",
    benefits: [
      "Boosts Immunity",
      "High Curcumin Levels",
      "Anti-inflammatory",

      "Organic & Lab Tested",
      //   "Supports Digestion",
    ],
    images: ["/images/turmeric.png", "/images/oil.jpg", "/images/t3.webp"],
  };

  return (
    <div className="bg-amber-50 min-h-screen pt-14 px-6 sm:px-10 md:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - Image Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full"
        >
          <ProductSlider images={product.images} />
        </motion.div>

        {/* RIGHT - Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4  pt-32"
        >
          <h1 className="text-4xl font-sans md:text-5xl font-bold text-yellow-600">
            {product.name}
          </h1>

          <p className="text-black/80 md:text-lg leading-relaxed">
            {product.description}
          </p>

          {/* PRICE */}
          <div className="py-6">
            <div className="text-5xl font-light text-yellow-600">
              ₹{product.price}
            </div>
            <p className="text-black text-sm">
              Per {product.weight} • Glass Jar • Organic
            </p>
          </div>

          {/* BENEFITS */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-black">
              Health Benefits:
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.benefits.map((item, i) => (
                <Badge key={i} text={item} />
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex w-full    gap-4 pt-6">
            <a
              href="https://wa.me/+919539769967"
              target="_blank"
              className="group  w-full inline-flex items-center justify-center gap-3 px-10 py-4 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition shadow-xl"
            >
              Buy Now{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
            </a>
            
          </div>
        </motion.div>
      </div>
      {/* ----------------------------------------------------------- */}
      {/* EXTRA SECTIONS TO ENCOURAGE VIEW */}
      {/* ----------------------------------------------------------- */}

      {/* TIMELINE SECTION */}
      {/* TIMELINE SECTION */}
      <div className="mt-20">
        <h2 className="text-3xl font-sans font-bold text-yellow-600 text-center mb-8">
          From Our Family Farm to Your Home
        </h2>
        <div className="space-y-6 relative border-l-4 border-yellow-500 pl-6">
          {[
            "Cultivated in our own family farms across Wayanad, Kerala",
            "Hand-picked turmeric, ginger & coffee from organic plantations",
            "Processed using Ayurvedic methods under the guidance of Dr. Sreedevi",
            "Stone-ground in small batches to preserve natural potency",
            "Glass-packed for freshness — no chemicals or preservatives",
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <p className="text-black">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NUTRITION FACTS */}
      {/* BRAND STORY */}
      <div className="mt-20 bg-white p-8  shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-yellow-700 text-center mb-6"
        >
          The Story of Indian Spices House
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-black/80 leading-relaxed text-lg text-center max-w-3xl mx-auto"
        >
          Indian Spices House is a family-grown organic brand led by{" "}
          <strong>Dr. Sreedevi</strong>, an Ayurvedic doctor with a passion for
          healing through nature. What began as a small home-based venture soon
          gained strong word-of-mouth appreciation — encouraging the family to
          grow into a trusted Ayurvedic brand. Today, every ingredient is
          cultivated organically in our farms in{" "}
          <strong>Wayanad, Kerala</strong> — ensuring purity, freshness, and
          medicinal strength in every batch.
        </motion.p>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-sans font-bold text-yellow-600 text-center mb-6">
          Nutrition Facts per 100g 
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-6 text-black">
          <ul className="space-y-2">
            <li className="flex text-black justify-between">
              <span>Source</span> <span>Wayanad Family Farms</span>
            </li>
            <li className="flex text-black justify-between">
              <span>Processing Method</span> <span>Traditional Ayurvedic</span>
            </li>
            <li className="flex text-black justify-between">
              <span>Preservatives</span> <span>None</span>
            </li>
            <li className="flex text-black justify-between">
              <span>Artificial Color</span> <span>Zero</span>
            </li>
          </ul>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="mt-20">
        <h2 className="text-3xl font-sans font-bold text-yellow-600 text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Neha S.",
              text: "I switched to this turmeric after a doctor recommended it — it feels powerful and pure.",
            },
            {
              name: "Dr. Raj Menon",
              text: "As a practitioner, I trust the sourcing and Ayurvedic processing of this brand.",
            },
            {
              name: "Family of 4 – Mumbai",
              text: "From coffee to spices, every product feels like it’s made with love.",
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-black/80">{review.text}</p>
              <p className="mt-4 font-semibold text-yellow-600">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-20 pb-20">
        <h2 className="text-3xl font-sans font-bold text-yellow-600 text-center mb-8">
          FAQs{" "}
        </h2>

        {[
          {
            q: "Who leads the brand?",
            a: "The brand is led by Ayurvedic doctor, Dr. Sreedevi — the face and heart of the company.",
          },
          {
            q: "Where are the spices sourced?",
            a: "Directly from our family-owned organic farms in Wayanad, Kerala.",
          },
          {
            q: "Are chemicals used?",
            a: "Absolutely not. All products are chemical-free, additive-free, and naturally processed.",
          },
        ].map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-b border-gray-200 py-4"
          >
            <h4 className="text-lg font-semibold text-black">{faq.q}</h4>
            <p className="text-black/70 mt-1">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
