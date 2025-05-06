"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string | string[];
  speed?: number;
  loop?: boolean;
  className?: string;
  delayBetween?: number;
}

export default function TypingText({
  text,
  speed = 100,
  loop = false,
  className = "",
  delayBetween = 2000,
}: TypingTextProps) {
  const textArray = Array.isArray(text) ? text : [text];

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = textArray[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing forward
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex));
        timeout = setTimeout(() => setCharIndex((prev) => prev + 1), speed);
      } else if (loop) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetween);
      }
    } else {
      // Deleting
      if (charIndex >= 0) {
        setDisplayedText(currentText.substring(0, charIndex));
        timeout = setTimeout(() => setCharIndex((prev) => prev - 1), speed / 2);
      }
      if (charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % textArray.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, loop, speed, delayBetween, textArray]);

  return (
    <h1 className={`${className}`}>
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  );
}
