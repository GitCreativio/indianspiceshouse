// app/components/WhyChooseUs.tsx
"use client";
import { motion } from "framer-motion";
import { Leaf, Users, Truck, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "100% Natural",
      desc: "No additives, no preservatives",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Family Recipe",
      desc: "Passed down since 1998",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Fast Delivery",
      desc: "Across India in 3-5 days",
    },
    // 4th one is included but hidden on mobile for focus
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Satisfaction",
      desc: "30-day money-back guarantee",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Low-opacity beautiful background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/images/why.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-white/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl font-sans md:text-6xl font-bold text-amber-700">
            The Soul of Our Spices
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white">
            Discover the dedication, heritage, and passion that makes every
            pinch of our spice a journey of flavor.
          </p>
        </motion.div>

        {/* 3-column centered layout (4th hidden on small screens) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto items-start">
          {reasons.slice(0, 3).map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center group"
            >
              {/* Icon with subtle hover lift */}
              <motion.div
                whileHover={{ y: -8 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-100 text-amber-700 mb-6 group-hover:bg-amber-200 transition-colors duration-300"
              >
                {reason.icon}
              </motion.div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white font-mono mb-2">
                {reason.title}
              </h3>
              <p className="text-amber-500 text-lg leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional 4th reason shown only on large screens */}
        {/* <div className="hidden lg:block mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="inline-flex flex-col items-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-rose-100 text-rose-700 mb-6">
              {reasons[3].icon}
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">
              {reasons[3].title}
            </h3>
            <p className="text-amber-700 text-lg">{reasons[3].desc}</p>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}
