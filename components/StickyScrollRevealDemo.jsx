"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
    
  {
    title: "Travel reviews",
    description:
      "Read honest travel reviews from travelers around the world to plan your next adventure. Discover destinations, accommodations, and activities that match your style.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <a href="https://www.tripexpert.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/s1.png"
            width={300}
            height={300}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            alt="Travel Reviews Demo"
          />
        </a>
      </div>
    ),
  },
  {
    title: "RCūox Digital Studio",
    description:
      "Experience professional digital solutions with RCūox Digital Studio. From web design to branding, we deliver creative and effective results for your business.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <a href="https://cuox.theandro.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/s2.png"
            width={300}
            height={300}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            alt="RCūox Digital Studio Demo"
          />
        </a>
      </div>
    ),
  },
  {
    title: "Aperture",
    description:
      "Aperture helps you manage project versions seamlessly. Keep your team synchronized, avoid version conflicts, and always work on the latest updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <a href="https://aperture.theandro.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/s3.png"
            width={300}
            height={300}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            alt="Aperture Demo"
          />
        </a>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <section id="projects">
      <div className="w-full min-h-screen bg-gray-900 text-white py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          My Project Showcase
        </h1>
        <p className="text-center text-lg max-w-2xl mx-auto text-gray-300 mb-16">
          Explore the main features of my projects with smooth scroll animations
          <span className="text-orange-500"> and interactive previews.</span>
        </p>
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
