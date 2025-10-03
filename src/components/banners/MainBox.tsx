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
        " w-full min-h-[80vh] bg-cover -z-10 bg-center flex flex-col items-center justify-center relative mx-0 text-white"
      }
    >
      <div className="absolute inset-0 -z-10 bg-black/40"></div>
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
