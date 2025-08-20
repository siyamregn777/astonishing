"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/Floating-dock";
import { IconBrandGithub, IconBrandInstagram, IconMail } from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.instagram.com/siyamregn3779",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/siyamregn777",
      target: "_blank",
    },
    {
      title: "Gmail",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:siyamregnyeshiddagna777@gmail.com",
      target: "_blank",
    },
  ];

  return (
    <section id="contact">
      <h2 className="text-center text-3xl font-bold mb-8">Contact <span className="text-pink-800">Me</span></h2>
        <div className="flex items-center justify-center w-full">
          <FloatingDock items={links} mobileClassName="translate-y-20" desktopClassName="" />
        </div>
    </section>
    
  );
}
