"use client";

import React, { useEffect, useState } from "react";

const texts = [
  "luxury digital marketing services",
  "Get 200$ for joining our digital marketing department and work remotely",
  "",
];

const TypingAnimation: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // Initial speed for typing

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setSpeed(50); // Faster when deleting
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setSpeed(150); // Slower when typing
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setSpeed(200); // Pause before starting the next text
      }
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, textIndex, speed]);

  return (
    <h1 className="text-white text-4xl font-bold">
      {displayText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </h1>
    
  );
};

export default TypingAnimation