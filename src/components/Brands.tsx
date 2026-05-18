"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Laptop, Sparkles } from "lucide-react";

const brands = [
  {
    name: "HP",
    image: "/brand/hp.png",
    glow: "shadow-blue-200/70",
    border: "hover:border-blue-300",
  },
  {
    name: "Dell",
    image: "/brand/dell.png",
    glow: "shadow-sky-200/70",
    border: "hover:border-sky-300",
  },
  {
    name: "Apple",
    image: "/brand/apple.png",
    glow: "shadow-slate-300/70",
    border: "hover:border-slate-300",
  },
  {
    name: "Lenovo",
    image: "/brand/lenovo.png",
    glow: "shadow-red-200/70",
    border: "hover:border-red-300",
  },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-16 text-white sm:py-20"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#ef4b3f]/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-yellow-300 shadow-2xl backdrop-blur"
          >
            <Laptop size={38} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur"
          >
            <Sparkles size={16} className="text-yellow-300" />
            Business-grade laptop brands
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="mt-5 text-4xl font-black tracking-tight sm:text-5xl"
          >
            <span className="bg-gradient-to-r from-[#ef4b3f] via-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Laptop Brands
            </span>{" "}
            Available
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Choose reliable laptops from trusted brands for business rental,
            leasing, onboarding, training, and event requirements.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl transition ${brand.glow} ${brand.border}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative flex h-44 items-center justify-center rounded-[1.5rem] bg-white p-8 shadow-xl">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  width={180}
                  height={120}
                  className="max-h-28 w-auto object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="relative mt-6 text-center">
                <h3 className="text-2xl font-black text-white">
                  {brand.name}
                </h3>

                <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#ef4b3f] via-yellow-400 to-blue-400" />

                <p className="mt-3 text-sm font-semibold text-slate-300">
                  {brand.name} Laptops
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/10 py-4 backdrop-blur">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-8 whitespace-nowrap px-6"
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center gap-3 text-sm font-bold text-slate-200"
              >
                <span className="h-2 w-2 rounded-full bg-yellow-300" />
                {brand.name} Laptop Rental
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}