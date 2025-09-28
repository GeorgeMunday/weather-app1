"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import BrandName from "../text/BrandName";
import HomeBtn from "../buttons/HomeBtn";
import SettingBtn from "../buttons/SettingBtn";
import AboutBtn from "../buttons/AboutBtn";
import AuthBtn from "../buttons/AuthBtn";

const MainHeading = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white border-b sm:mx-10 lg:mx-80  border-gray-400 ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <BrandName />
        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="px-6 pb-4 flex flex-col gap-3 bg-white border-t border-gray-200">
          <HomeBtn />
          <SettingBtn />
          <AboutBtn />
          <AuthBtn />
        </div>
      )}
    </div>
  );
};

export default MainHeading;
