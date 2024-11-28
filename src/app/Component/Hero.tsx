"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import TypingAnimation from "../animations/Hero";

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-PC-SMB-OneNote:VP4-1260x600",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/OneNote-in-Education?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fit=constrain",
  ];

  if (!isClient) return null;

  return (
    <section className="flex items-center flex-col w-full h-screen overflow-hidden background-img px-4">
      <Navbar />
      <div className="inset-0 flex items-center justify-around w-full py-20 z-10">
        <div className="max-w-lg">
          <TypingAnimation />
          <h2 className="mt-6 text-slate-300 text-lg leading-relaxed">
            We provide luxury, boutique brands with digital marketing services
            including social media, SEO, PPC, and more.
          </h2>
          <Link
            href="/signup"
            className="block w-full text-center w-32 bg-blue-500 text-white font-semibold text-lg px-4 py-2 rounded transition-all duration-300 hover:bg-blue-600"
          >
            JOIN US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
