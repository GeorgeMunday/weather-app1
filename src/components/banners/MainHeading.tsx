import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import BrandName from "../text/BrandName";
import HomeBtn from "../buttons/HomeBtn";
import SettingBtn from "../buttons/SettingBtn";
import AboutBtn from "../buttons/AboutBtn";
import AuthBtn from "../buttons/AuthBtn";
import WeatherByCountry from "../menus/WeatherByCountry";
import { CountryTypes } from "@/types/CountryTypes";

const MainHeading = ({
  setLongitude,
  setLatitude,
  setCountry,
  longitude,
  latitude,
}: CountryTypes) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white border-gray-400 w-full">
      <div className="w-full h-24 flex items-center justify-between px-4">
        <BrandName />
        <WeatherByCountry
          longitude={longitude}
          latitude={latitude}
          setLongitude={setLongitude}
          setLatitude={setLatitude}
          setCountry={setCountry}
        />
        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="w-full px-4 pb-4 flex flex-col gap-3 bg-white border-t border-gray-200">
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
