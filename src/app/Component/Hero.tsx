"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import TypingAnimation from "../animations/Hero";

export const Hero: React.FC = () => {
 

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
