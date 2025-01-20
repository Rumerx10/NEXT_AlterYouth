"use client";
import { useState, useEffect } from "react";

const useIsMobileScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure window is available

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 769);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};

export default useIsMobileScreen;
