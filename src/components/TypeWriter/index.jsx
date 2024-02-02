import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay = 30, animate = true, style }) => {
  const [currentText, setCurrentText] = useState(!animate ? text : "");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!animate) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <p style={style}>{currentText}</p>;
};

export default Typewriter;
