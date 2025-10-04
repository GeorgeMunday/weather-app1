"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import BrandName from "../text/BrandName";
import HomeBtn from "../buttons/navigation/HomeBtn";
import SettingBtn from "../buttons/navigation/SettingBtn";
import AboutBtn from "../buttons/navigation/AboutBtn";
import { CountryTypes } from "@/types/CountryTypes";
import { useTheme } from "@/context/ThemeContext";
import { tailwindColours } from "@/components/colours/ColorMode";
import SigninBtn from "../buttons/auth/SigninBtn";
import SignupBtn from "../buttons/auth/SignupBtn";
import SignOutBtn from "../buttons/auth/SignOutBtn";
import { useAuth } from "@/context/AuthContext";

const SubHeading = () => {
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
    <div className={`w-full ${colours.background} ${colours.text}`}>
      <div className="w-full h-24 flex items-center justify-between px-4">
        <BrandName />
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-black"></div>
        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`w-full px-4 pb-4 flex flex-col gap-3 border-t ${colours.card} ${colours.text}`}
        >
          {user ? (
            <>
              <Links />
              <SignOutBtn />
            </>
          ) : (
            <>
              <Links />
              <SigninBtn />
              <SignupBtn />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SubHeading;
