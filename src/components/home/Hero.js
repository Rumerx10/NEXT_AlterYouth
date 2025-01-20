"use client"
import React, { useState, useEffect } from "react";
import useIsMobileScreen from "../useIsMobileScreen";
import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";
const Hero = () => {
  const [hydrated, setHydrated] = useState(false);
  const isMobileScreen = useIsMobileScreen();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;
  return (
    <>
      {isMobileScreen ? <MobileHero /> : <DesktopHero />}
    </>
  );
}

export default Hero;
