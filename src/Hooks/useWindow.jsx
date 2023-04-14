import React, { useState, useEffect } from "react";

export default function useWindow() {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });
  useEffect(() => {
    function handleSize() {
      setWindowSize({ height: window.height, width: window.innerWidth });
    }
    window.addEventListener("resize", handleSize);
    handleSize();

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return windowSize;
}
