import { InfoTypes } from "@/types/InfoTypes";
import React from "react";
import { tailwindColours } from "../colours/ColorMode";
import Chart from "../menus/diagrams/Chart";
import { useTheme } from "@/context/ThemeContext";

const TabelsBox = ({
  dailyTemp,
  humidity,
  rainChance,
  cloudCover,
  wind,
  visibility,
}: InfoTypes) => {
  const { isLight } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });

  return (
    <div
      className={`${colours.background} ${colours.text} w-full min-h-[40vh] flex flex-col items-center py-6`}
    >
      <div className="flex flex-col items-center py-6 text-center">
        <h1 className="text-2xl mb-1 font-semibold">Statistics</h1>
        <h3 className="text-sm opacity-80">Future predicted temperatures</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4">
        {[
          { title: "Temperature | °C", data: dailyTemp, color: "#f97316" },
          { title: "Chance of Rain | %", data: rainChance, color: "#0ea5e9" },
          { title: "Humidity | %", data: humidity, color: "#22c55e" },
          { title: "Cloud Cover | %", data: cloudCover, color: "#f43f5e" },
          { title: "Wind Speed | km/h", data: wind, color: "#8b5cf6" },
          { title: "Visibility | m", data: visibility, color: "#eab308" },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center w-full p-4 rounded-2xl shadow-sm ${colours.card} ${colours.text}`}
          >
            <h3 className="text-sm opacity-80 mb-2">{item.title}</h3>
            <Chart data={item.data} label="" color={item.color} title="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabelsBox;
