import React, { useState, useEffect } from "react";

export const Intro = () => {
  const fullText = "Hi, I'm Youness Ichen.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Adjust blinking speed here
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="intro">
      <h2>
        {displayedText}
        <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
      </h2>
      <p>
        A machine learning and AI enthusiast based in Fes, specializing in advanced machine learning, 
        deep learning, and software development. Passionate about building intelligent systems, 
        exploring explainable AI, and applying data-driven solutions to real-world challenges. 🚀
      </p>
    </div>
  );
};
