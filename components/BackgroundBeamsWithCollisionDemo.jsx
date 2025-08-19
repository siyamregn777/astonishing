"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            Me
          </span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img
              src="/my.png"
              alt="Siyamregn Yeshidagna"
              className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg border-4 border-purple-400 object-cover hover:scale-105 transition-transform"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <p className="mt-2 text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I’m <span className="font-semibold">Siyamregn Yeshidagna</span>, 
              a passionate <span className="font-semibold">Full-Stack Developer</span> 
              with a strong background in building modern, scalable, and user-friendly 
              web applications. I enjoy turning ideas into digital solutions that make 
              a real impact.
            </p>

            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I have hands-on experience with <span className="font-medium">React, Next.js, Node.js, 
              PostgreSQL, MySQL</span>, and more. Beyond coding, I focus on crafting clean designs, 
              intuitive user experiences, and performance-optimized applications.
            </p>

            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I’m not coding, I’m learning new technologies, contributing to projects, 
              or exploring creative ways to improve user interactions on the web.
            </p>
          </motion.div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
