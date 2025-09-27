import BrandName from "../text/BrandName";
import HomeBtn from "../buttons/HomeBtn";
import { CountryTypes } from "@/types/CountryTypes";
import WeatherByCountry from "../menus/WeatherByCountry";
import SettingBtn from "../buttons/SettingBtn";
import AboutBtn from "../buttons/AboutBtn";
import AuthBtn from "../buttons/AuthBtn";

const MainHeading = ({
  setLongitude,
  setLatitude,
  setCountry,
  longitude,
  latitude,
}: CountryTypes) => {
  return (
    <div className="flex items-center justify-between gap-4 py-4 px-6 bg-transparent w-full border-b border-b-gray-400 pb-8">
      <BrandName />
      <HomeBtn />
      <SettingBtn />
      <AboutBtn />
      <WeatherByCountry
        longitude={longitude}
        latitude={latitude}
        setLongitude={setLongitude}
        setLatitude={setLatitude}
        setCountry={setCountry}
      />
      <AuthBtn />
    </div>
  );
};

export default MainHeading;
