import { InfoTypes } from "@/types/InfoTypes";
import React, { useState } from "react";
import { tailwindColours } from "../colours/ColorMode";
import { ColourSate } from "@/types/ColourTypes";
import Chart from "../menus/diagrams/Chart";
import { Link } from "lucide-react";
import AuthBtn from "../buttons/AuthBtn";

const TabelsBox = ({
  dailyTemp,
  humidity,
  rainChance,
  cloudCover,
  wind,
  visibility,
}: InfoTypes) => {
  const [isLight, setIsLight] = useState(true);
  const colourState: ColourSate = { isLight, setIsLight };
  const colours = tailwindColours(colourState);

  return (
    <div
      className={`mx-4 sm:mx-10 lg:mx-20 h-auto min-h-[40vh] border-x border-gray-400 flex flex-col items-center justify-center`}
    >
      <div className="flex flex-col items-center py-6 text-center">
        <h1 className="text-2xl  mb-1">Statistics</h1>
        <h3 className="text-sm opacity-80">Future predicted temps</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 w-full px-4 pt-10">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm opacity-80 mb-2">Temperature | °C</h3>
          <Chart data={dailyTemp} label="" color="#f97316" title="" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm opacity-80 mb-2">Chance of Rain | %</h3>
          <Chart data={rainChance} label="" color="#0ea5e9" title="" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm opacity-80 mb-2">Humidity | %</h3>
          <Chart data={humidity} label="" color="#22c55e" title="" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm opacity-80 mb-2">Clouds Cover | %</h3>
          <Chart data={cloudCover} label="" color="#64748b" title="" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm opacity-80 mb-2">Wind Speen | km/h</h3>
          <Chart data={wind} label="" color="#64748b" title="" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm opacity-80 mb-2">Visibility | m</h3>
          <Chart data={visibility} label="" color="#64748b" title="" />
        </div>
      </div>
    </div>
  );
};

export default TabelsBox;
