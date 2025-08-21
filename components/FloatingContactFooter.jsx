"use client";
import React from "react";
import { IconBrandGithub, IconBrandInstagram, IconMail } from "@tabler/icons-react";

export default function FloatingContactFooter() {
  const links = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/siyamregn3779",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="w-6 h-6" />,
      href: "https://github.com/siyamregn777",
    },
    {
      title: "Gmail",
      icon: <IconMail className="w-6 h-6" />,
      href: "mailto:siyamregnyeshiddagna777@gmail.com",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">
      {links.map((link) => (
        <a
          key={link.title}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors shadow-lg"
          title={link.title}
        >
          {link.icon}
        </a>
      ))}
      <div className="w-px h-16 bg-white/30 mt-2" />
    </div>
  );
}
