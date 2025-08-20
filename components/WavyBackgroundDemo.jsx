"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button"; // assuming you use shadcn/ui

export function WavyBackgroundDemo() {
  return (
    <section id="home">
      
    <WavyBackground className="max-w-4xl mx-auto pb-40 px-6 mt-20">
      <p className="text-3xl  md:text-5xl lg:text-7xl text-white font-bold text-center leading-tight">
        Siyamregn Yeshidagna
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
        <Button asChild
          variant="outline" 
          className="px-6 py-3 rounded-xl text-lg border-white text-white hover:bg-white hover:text-black transition-colors"
        ><a href="#contact">Hire Me</a>
        </Button>
      </div>
    </WavyBackground>
    </section>
  );
}
