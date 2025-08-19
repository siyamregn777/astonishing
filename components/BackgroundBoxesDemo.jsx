"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[32rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-2xl shadow-xl">
      {/* Overlay with mask for nice fading effect */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated Boxes Background */}
      <Boxes />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-20 text-center px-6 max-w-3xl"
      >
        <h2 className={cn("md:text-5xl text-3xl font-bold text-white")}>
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Skills</span>
        </h2>

        <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
          I specialize in building modern, responsive, and scalable web applications using the latest technologies.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-white text-sm md:text-base font-medium">
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg shadow-md">
            React & Next.js
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg shadow-md">
            Node.js & Express
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg shadow-md">
            PostgreSQL & MySQL
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg shadow-md">
            Tailwind CSS & UI/UX
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg shadow-md">
            REST APIs & GraphQL
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg shadow-md">
            Git & Agile Workflow
          </div>
        </div>
      </motion.div>
    </div>
  );
}

