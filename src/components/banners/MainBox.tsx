import { InfoTypes } from "@/types/InfoTypes";
import React from "react";
import { useState } from "react";
import { tailwindColours } from "../colours/ColorMode";
import { ColourSate } from "@/types/ColourTypes";
import { useEffect } from "react";
import { getEmoji } from "@/api/CodeDescriptions";

const MainBox = ({ temp, time, description, feelTemp, country }: InfoTypes) => {
  const [emoji, setEmoji] = useState("N/A");
  const [isLight, setIsLight] = useState(true);
  const colourState: ColourSate = { isLight, setIsLight };
  const colours = tailwindColours(colourState);

  useEffect(() => {
    setEmoji(getEmoji(description || ""));
  }, [description]);

  var backgroundImageURL = "";
  if (country === "USA") {
    backgroundImageURL = "./usa.avif";
  } else if (country === "England") {
    backgroundImageURL = "./england.webp";
  } else if (country === "Germany") {
    backgroundImageURL = "germany.jpg";
  } else if (country === "Japan") {
    backgroundImageURL = "japan.webp";
  } else if (country === "France") {
    backgroundImageURL = "france.jpg";
  } else if (country === "Australia") {
    backgroundImageURL = "australia.webp";
  } else {
    backgroundImageURL = "placeholder.webp";
  }

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
      className={
        " bg-cover mx-4 md:mx-10 lg:mx-20 h-auto min-h-[80vh] border-l-1 border-r-1 border-gray-400 justify-center flex flex-col items-center text-white"
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
          <div className="text-7xl">{emoji}</div>
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
