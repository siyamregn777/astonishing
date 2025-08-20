"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="text-4xl font-bold mb-4">Kind words from <span className="text-blue-500">satisfied clients</span></h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with Siyamregn was a game changer for our project. He took our vague ideas and turned them into a sleek, functional product ahead of schedule. His communication was spot on, and his technical skills speak for themselves.",
    name: "Solomon Asregdew",
    title: "Senior Web Developer",
    image:"/my.png",
  },
  {
    quote:
      "What stood out with Siyamregn was not just his clean code, but his ability to understand our business goals. He made smart suggestions that improved our product, and his execution was flawless.",
    name: "Jacob Alfred",
    title: "Senior Web Developer",
    image:"/my.png",

  },
  {
    quote: "Siyamregn brings energy and clarity to every stage of the development process. From planning to execution, he thinks like a user and codes like a pro. He’s one of the most dependable developers I’ve worked with..",
    name: "Tadele Tesema",
    title: "A Co-founder Developer at Gago ",
    image:"/my.png",

  },
  {
    quote:
      "You rarely find someone who can both design and develop with such creativity and precision. Siyamregn helped us launch faster and better than we imagined. I highly recommend him to any startup team..",
    name: "Michael Johnson",
    title: "Senior web developer",
    image:"/my.png",

  },
  
];
