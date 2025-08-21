"use client";
import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";

export function WavyBackgroundDemo() {
  const fullName = "Siyamregn Yeshidagna".split("");

  return (
    <section id="home">
      <WavyBackground className="max-w-4xl mx-auto pb-40 px-6 mt-20">
        <p className="text-3xl md:text-5xl lg:text-7xl text-white font-bold text-center leading-tight min-h-[1.5em] flex justify-center">
          {fullName.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }} // fade in → stay → fade out
              transition={{
                duration: 3,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: fullName.length * 0.1, // pause before restart
              }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            className="inline-block w-1 h-16 bg-white ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        </p>

        <p className="text-lg md:text-2xl mt-4 text-white font-medium text-center">
          Full-Stack Developer | Building Modern Web Experiences
        </p>
        <p className="text-sm md:text-lg mt-4 text-gray-200 text-center max-w-2xl mx-auto">
          Passionate about crafting user-friendly applications with clean design, 
          scalable backend systems, and smooth user experiences.
        </p>

        <div className="flex justify-center mt-8 gap-4">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="px-6 py-3 rounded-xl text-lg border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </WavyBackground>
    </section>
  );
}
