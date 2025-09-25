import { InfoTypes } from "@/types/InfoTypes";
import React from "react";

const MainBox = ({ temp, time, description, feelTemp, country }: InfoTypes) => {
  return (
    <div
      className="
        mx-4 sm:mx-10 lg:mx-20 
        h-auto min-h-[90vh] lg:h-[90vh] 
        border-x border-gray-400 
        flex flex-col items-center
        text-gray-400
      "
    >
      <div className="flex flex-col items-center p-8">
        <div className="text-5xl mb-2">Weather In {country}</div>
        <div className="text-xl">{time}</div>
      </div>

      <div className="flex flex-col items-center p-8">
        <div className="text-9xl">
          {temp != null ? temp.toFixed(0) : "N/A"}°
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div>{feelTemp[0]?.toFixed(0)}</div>
        <div>|</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default MainBox;
