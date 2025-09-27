import { InfoTypes } from "@/types/InfoTypes";
import React from "react";
import { useState } from "react";
import { tailwindColours } from "../colours/ColorMode";
import { ColourSate } from "@/types/ColourTypes";

const MainBox = ({ temp, time, description, feelTemp, country }: InfoTypes) => {
  const [isLight, setIsLight] = useState(true);
  const colourState: ColourSate = { isLight, setIsLight };
  const colours = tailwindColours(colourState);

  var backgroundImageURL = "";
  if (country === "USA") {
    backgroundImageURL = "./usa.avif";
  } else if (country === "England") {
    backgroundImageURL = "./england.webp";
  } else if (country === "Germany") {
    backgroundImageURL = "germany.jpg";
  }

  const emojis = ["⛅", "🌨️", "☀️", "💧"];

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
      className={
        " bg-cover mx-4 sm:mx-10 lg:mx-20 h-auto min-h-[60vh]  border-x border-gray-400 justify-center flex flex-col items-center text-white"
      }
    >
      <div className="flex flex-col items-center">
        <div className="text-5xl mb-2">Weather In {country}</div>
        <div>
          <div className="text-xl">{time}</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <div className="text-8xl">
            {temp != null ? temp.toFixed(0) : "N/A"}°
          </div>
          <div className="text-7xl">{emojis[0]}</div>
        </div>
        <div className="flex gap-2 items-center">
          <div>{feelTemp[0]?.toFixed(0)}°</div>
          <div>|</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
