"use client";

import React from "react";
import ToggleButton from "@/components/buttons/ToggleButton";
import { useTheme } from "@/context/ThemeContext";
import { tailwindColours } from "@/components/colours/ColorMode";
import SubHeading from "@/components/banners/SubHeading";

const SettingsPage = () => {
  const { isLight, toggleTheme } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });

  return (
    <div className={`min-h-screen p-6 ${colours.background} ${colours.text}`}>
      <SubHeading />
      <h1 className="text-2xl mb-4">Settings</h1>
      <ToggleButton onClick={toggleTheme} className={colours.button}>
        {isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </ToggleButton>
    </div>
  );
};

export default SettingsPage;
