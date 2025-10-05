import { InfoTypes } from "@/types/InfoTypes";
import React, { useState, useEffect } from "react";
import { getEmoji } from "@/Api/CodeDescriptions";

const MainBox = ({ temp, time, description, feelTemp, country }: InfoTypes) => {
  const [emoji, setEmoji] = useState("N/A");

  useEffect(() => {
    setEmoji(getEmoji(description || ""));
  }, [description]);

  const safeCountry = country || "England";

  let backgroundImageURL = `/placeholder.webp`;
  switch (safeCountry) {
    case "USA":
      backgroundImageURL = "/usa.avif";
      break;
    case "England":
      backgroundImageURL = "/england.webp";
      break;
    case "Germany":
      backgroundImageURL = "/germany.jpg";
      break;
    case "Japan":
      backgroundImageURL = "/japan.webp";
      break;
    case "France":
      backgroundImageURL = "/france.jpg";
      break;
    case "Australia":
      backgroundImageURL = "/australia.webp";
      break;
  }

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
      className="
        w-full 
        min-h-[80vh] 
        bg-cover 
        bg-center 
        relative 
        flex 
        flex-col 
        items-center 
        justify-center 
        text-white
      "
    >
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
      <div className="flex flex-col items-center z-10">
        <div className="text-5xl mb-2">Weather in {country}</div>
        <div className="text-xl">{time}</div>
      </div>

      <div className="flex flex-col items-center z-10 mt-4">
        <div className="flex items-center space-x-4">
          <div className="text-8xl">
            {temp != null ? temp.toFixed(0) : "N/A"}°
          </div>
          <div className="text-7xl">{emoji}</div>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <div>{feelTemp[0]?.toFixed(0)}°</div>
          <div>|</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
