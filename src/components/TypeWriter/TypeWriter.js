import React, { useEffect, useState, useCallback } from "react";
import "./TypeWriter.css";

export const TypeWriter = ({ textColor, text }) => {
  const [displayText, setDisplayText] = useState("");

  const writeScreen = useCallback((text, i = 0) => {
    if (i < text.length) {
      setDisplayText(text.slice(0, i + 1));
      setTimeout(() => writeScreen(text, i + 1), 100);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => writeScreen(text), 100);
    return () => clearTimeout(timer);
  }, [text, writeScreen]);

  return (
    <div>
      <div className="write-machine" style={{ color: textColor }}>{displayText}</div>
    </div>
  );
};

export default TypeWriter;
