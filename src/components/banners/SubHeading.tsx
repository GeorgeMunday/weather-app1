"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import BrandName from "../text/BrandName";
import HomeBtn from "../buttons/navigation/HomeBtn";
import SettingBtn from "../buttons/navigation/SettingBtn";
import AboutBtn from "../buttons/navigation/AboutBtn";
import WeatherByCountry from "../menus/WeatherByCountry";
import { CountryTypes } from "@/types/CountryTypes";
import { useTheme } from "@/context/ThemeContext";
import { tailwindColours } from "@/components/colours/ColorMode";
import SigninBtn from "../buttons/auth/SigninBtn";
import SignupBtn from "../buttons/auth/SignupBtn";
import SignOutBtn from "../buttons/auth/SignOutBtn";
import { useAuth } from "@/context/AuthContext";
import { SubHeadingTextTypes } from "@/types/SubHeadingTextTypes";

const SubHeading = ({ text }: SubHeadingTextTypes) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const { isLight } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });

  const Links = () => (
    <>
      <HomeBtn />
      <SettingBtn />
      <AboutBtn />
    </>
  );

  return (
    <nav
      role="navigation"
      className={`sticky top-0 w-full border-b transition-colors duration-300 ${colours.background} ${colours.text} z-50`}
    >
      <div className="flex items-center justify-between px-6 h-20">
        <BrandName />
        <p className="block absolute left-1/2 transform -translate-x-1/2">
          {text}
        </p>
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2"></div>
        <div className="hidden md:flex items-center gap-6">
          <Links />
          {user ? (
            <SignOutBtn />
          ) : (
            <>
              <SigninBtn />
              <SignupBtn />
            </>
          )}
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col gap-4 px-6 py-4 border-t ${colours.card} ${colours.text}`}
        >
          <Links />
          {user ? (
            <SignOutBtn />
          ) : (
            <>
              <SigninBtn />
              <SignupBtn />
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default SubHeading;
