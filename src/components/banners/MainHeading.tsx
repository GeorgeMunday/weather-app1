import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import BrandName from "../text/BrandName";
import HomeBtn from "../buttons/HomeBtn";
import SettingBtn from "../buttons/SettingBtn";
import AboutBtn from "../buttons/AboutBtn";
import AuthBtn from "../buttons/AuthBtn";
import WeatherByCountry from "../menus/WeatherByCountry";
import { CountryTypes } from "@/types/CountryTypes";
import { useTheme } from "@/context/ThemeContext";
import { tailwindColours } from "@/components/colours/ColorMode";

const MainHeading = ({
  setLongitude,
  setLatitude,
  setCountry,
  longitude,
  latitude,
}: CountryTypes) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLight } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });

  return (
    <div className={`w-full ${colours.background} ${colours.text}`}>
      <div className="w-full h-24 flex items-center justify-between px-4">
        <BrandName />
        <div className="text-black">
          <WeatherByCountry
            longitude={longitude}
            latitude={latitude}
            setLongitude={setLongitude}
            setLatitude={setLatitude}
            setCountry={setCountry}
          />
        </div>
        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div
          className={`w-full px-4 pb-4 flex flex-col gap-3 border-t ${colours.card} ${colours.text}`}
        >
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
