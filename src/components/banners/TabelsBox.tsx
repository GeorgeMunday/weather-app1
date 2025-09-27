import { InfoTypes } from "@/types/InfoTypes";
import React, { useState } from "react";
import { tailwindColours } from "../colours/ColorMode";
import { ColourSate } from "@/types/ColourTypes";
import Chart from "../charts/Chart";

const TabelsBox = ({ dailyTemp }: InfoTypes) => {
  const [isLight, setIsLight] = useState(true);
  const colourState: ColourSate = { isLight, setIsLight };
  const colours = tailwindColours(colourState);

  return (
    <div
      className={`mx-4 sm:mx-10 lg:mx-20 h-auto min-h-[40vh] border-x border-gray-400 flex flex-col items-center justify-center`}
    >
      <div className="flex flex-col items-center py-6 text-center">
        <h1 className="text-2xl font-semibold mb-1">Statistics</h1>
        <h3 className="text-sm opacity-80">Future predicted temps</h3>
      </div>
      <div className="overflow-x-auto">
        <Chart dailyTemp={dailyTemp} />
      </div>
      <h3 className="text-sm opacity-80">predicted rainfall</h3>
      <h3 className="text-sm opacity-80">Humidity</h3>
    </div>
  );
};

export default TabelsBox;
