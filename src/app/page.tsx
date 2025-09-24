"use client";
import { useEffect, useState } from "react";

import { ColourSate } from "@/types/ColourTypes";
import { tailwindColours } from "@/components/colours/ColorMode";
import { getWeather } from "@/Api/Weather";
import ToggleButton from "@/components/buttons/ToggleButton";
import MainHeading from "@/components/banners/MainHeading";

export default function Home() {
  const [isLight, setIsLight] = useState(true);
  const colourState: ColourSate = { isLight, setIsLight };
  const colours = tailwindColours(colourState);
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    async function fetchTemp() {
      const weather = await getWeather();
      setTemp(weather.current.temperature_2m);
    }
    fetchTemp();
  }, []);

  return (
    <p>{temp !== null ? `Current temperature: ${temp}°C` : "Loading..."}</p>
  );
}
