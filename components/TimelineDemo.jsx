import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      id: 1, // 🔑 unique id
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "startup-1.webp",
              "startup-2.webp",
              "startup-3.webp",
              "startup-4.webp",
            ].map((file, idx) => (
              <img
                key={idx}
                src={`https://assets.aceternity.com/templates/${file}`}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                src: "https://assets.aceternity.com/pro/hero-sections.png",
                alt: "hero template",
              },
              {
                src: "https://assets.aceternity.com/features-section.png",
                alt: "feature template",
              },
              {
                src: "https://assets.aceternity.com/pro/bento-grids.png",
                alt: "bento template",
              },
              {
                src: "https://assets.aceternity.com/cards.png",
                alt: "cards template",
              },
            ].map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            {[
              "✅ Card grid component",
              "✅ Startup template Aceternity",
              "✅ Random file upload lol",
              "✅ Himesh Reshammiya Music CD",
              "✅ Salman Bhai Fan Club registrations open",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                src: "https://assets.aceternity.com/pro/hero-sections.png",
                alt: "hero template",
              },
              {
                src: "https://assets.aceternity.com/features-section.png",
                alt: "feature template",
              },
              {
                src: "https://assets.aceternity.com/pro/bento-grids.png",
                alt: "bento template",
              },
              {
                src: "https://assets.aceternity.com/cards.png",
                alt: "cards template",
              },
            ].map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      {/* ✅ Timeline will now receive data with stable keys */}
      <Timeline data={data} />
    </div>
  );
}
