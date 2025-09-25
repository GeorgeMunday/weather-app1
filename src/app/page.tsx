"use client";
import { useEffect, useState } from "react";

import { ColourSate } from "@/types/ColourTypes";
import { tailwindColours } from "@/components/colours/ColorMode";
import { getWeather } from "@/Api/Weather";
import ToggleButton from "@/components/buttons/ToggleButton";
import MainHeading from "@/components/banners/MainHeading";
import WeatherByCountry from "@/components/menus/WeatherByCountry";
import { weatherCodeDescriptions } from "@/Api/CodeDescriptions";

export default function Home() {
  const [isLight, setIsLight] = useState(true);
  const colourState: ColourSate = { isLight, setIsLight };
  const colours = tailwindColours(colourState);
  const [temp, setTemp] = useState<number | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [longitude, setLongitude] = useState(52.52);
  const [latitude, setLatitude] = useState(13.41);
  const [country, setCountry] = useState("Germany");

  useEffect(() => {
    async function fetchTemp() {
      const weather = await getWeather({ longitude, latitude });
      setTemp(weather.current.temperature_2m);
      const code = weather.current.weather_code;
      setDescription(weatherCodeDescriptions[code] || "Unknown");
    }
    fetchTemp();
  }, [longitude, latitude]);

  return (
    <>
      <MainHeading />
      <WeatherByCountry
        country={country}
        longitude={longitude}
        latitude={latitude}
        setLongitude={setLongitude}
        setLatitude={setLatitude}
      />
      <p>Temp C°: {temp}</p>
      <p>Weather: {description}</p>
    </>
  );
}
