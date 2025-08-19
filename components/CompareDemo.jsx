"use client";
import React from "react";
import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";

export function CompareDemo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl">
      {/* Left: Compare Slider */}
      <div className="flex-shrink-0">
        <Compare
          firstImage="/int.png"
          secondImage="/my.png"
          firstImageClassName="object-cover object-center"
          secondImageClassname="object-cover object-center"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-lg"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight">
          From{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500">
            Intern
          </span>{" "}
          to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Team Leader
          </span>
        </h2>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          I started my journey as an intern and grew into a leader,
          guiding teams to deliver impactful, scalable, and
          user-friendly digital products.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium shadow-lg hover:opacity-90 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="px-6 py-3 rounded-xl border border-black dark:border-white text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Let’s Collaborate
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
