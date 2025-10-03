import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { tailwindColours } from "@/components/colours/ColorMode";
import AboutBtn from "../buttons/AboutBtn";
import AuthBtn from "../buttons/AuthBtn";
import HomeBtn from "../buttons/HomeBtn";
import SettingBtn from "../buttons/SettingBtn";

const Footer = () => {
  const { isLight } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });
  return (
    <footer
      className={`${colours.background} ${colours.text} border-t ${colours.border}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <HomeBtn />
          <AboutBtn />
          <SettingBtn />
          <AuthBtn />
        </div>
        <div className="text-sm md:text-base">
          <span>Find more on my GitHub: </span>
          <a
            href="https://github.com/GeorgeMunday"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GeorgeMunday
          </a>
        </div>
      </div>
      <div className={`text-center text-sm py-3 border-t ${colours.border}`}>
        &copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
