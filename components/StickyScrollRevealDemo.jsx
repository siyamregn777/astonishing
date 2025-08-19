"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. Streamline your workflow and boost productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <a href="https://example.com/collaborative-editing" target="_blank" rel="noopener noreferrer">
          <img
            src="/collaborative.webp"
            width={300}
            height={300}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            alt="Collaborative Editing Demo"
          />
        </a>
      </div>
    ),
  },
  {
    title: "Real-Time Changes",
    description:
      "See changes as they happen. Track every modification in real time. Say goodbye to version confusion and embrace smooth updates instantly.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <a href="https://example.com/real-time-changes" target="_blank" rel="noopener noreferrer">
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            alt="Real-Time Changes Demo"
          />
        </a>
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Never stress about version control again. Always work on the most recent version of your project. Keep your team aligned and maintain workflow seamlessly.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <a href="https://example.com/version-control" target="_blank" rel="noopener noreferrer">
          <img
            src="/version.webp"
            width={300}
            height={300}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            alt="Version Control Demo"
          />
        </a>
      </div>
    ),
  },
  {
    title: "Project Scalability",
    description:
      "Scale your projects effortlessly. Add new features, update content, and manage multiple workflows without disrupting your team's productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <a href="https://example.com/project-scalability" target="_blank" rel="noopener noreferrer">
          <img
            src="/scalability.webp"
            width={300}
            height={300}
            className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            alt="Project Scalability Demo"
          />
        </a>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-20 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        My Project Showcase
      </h1>
      <p className="text-center text-lg max-w-2xl mx-auto text-gray-300 mb-16">
        Explore the main features of my project with smooth scroll animations
        and interactive previews. Each section highlights a key aspect of the
        project.
      </p>
      <StickyScroll content={content} />
    </div>
  );
}
