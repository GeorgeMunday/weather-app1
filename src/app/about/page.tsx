"use client";
import Footer from "@/components/banners/Footer";
import SubHeading from "@/components/banners/SubHeading";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { tailwindColours } from "@/components/colours/ColorMode";
import AboutText from "@/components/text/AboutText";

const page = () => {
  const { isLight, toggleTheme } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });
  return (
    <>
      <SubHeading text="About" />
      <div className={`min-h-[80vh]  ${colours.background} ${colours.text}`}>
        <AboutText />
        <Footer />
      </div>
    </>
  );
};

export default page;
