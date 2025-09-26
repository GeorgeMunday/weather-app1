"use client";

import { useEffect, useState } from "react";
import { ColourSate } from "@/types/ColourTypes";
import { tailwindColours } from "@/components/colours/ColorMode";
import { getWeather } from "@/Api/Weather";
import MainHeading from "@/components/banners/MainHeading";
import MainBox from "@/components/banners/MainBox";
import { weatherCodeDescriptions } from "@/Api/CodeDescriptions";
import { countryTimeZones } from "@/Api/TimeZones";
import Footer from "@/components/banners/Footer";
import TabelsBox from "@/components/banners/TabelsBox";

export default function Home() {
  const [isLight, setIsLight] = useState(true);
  const colourState: ColourSate = { isLight, setIsLight };
  const colours = tailwindColours(colourState);

  const [temp, setTemp] = useState<number | null>(null);
  const [feelTemp, setFeelTemp] = useState<number[]>([]);
  const [description, setDescription] = useState<string | null>(null);
  const [dailyTemp, setDailyTemp] = useState<number[]>([]);

  const [longitude, setLongitude] = useState(13.41);
  const [latitude, setLatitude] = useState(52.52);
  const [country, setCountry] = useState("Germany");

  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    async function fetchWeather() {
      const weather = await getWeather({ longitude, latitude });
      setTemp(weather.current.temperature_2m);
      const code = weather.current.weather_code;
      setDescription(weatherCodeDescriptions[code] || "Unknown");
      setCurrentTime(new Date(weather.current.time));
      const apparent = weather.current.apparent_temperature;
      setFeelTemp(
        apparent instanceof Float32Array
          ? Array.from(apparent)
          : typeof apparent === "number"
          ? [apparent]
          : []
      );
      const temps = Array.from(weather.hourly?.temperature_2m || []);
      setDailyTemp(temps.slice(0, 12));
    }

    fetchWeather();
  }, [longitude, latitude]);
  useEffect(() => {
    if (!currentTime) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) =>
        prev ? new Date(prev.getTime() + 1000) : new Date()
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  useEffect(() => {
    if (!currentTime) return;

    const formatted = currentTime.toLocaleString("en-GB", {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "long",
      timeZone: countryTimeZones[country] || "UTC",
    });

    setTime(formatted);
  }, [currentTime, country]);

  return (
    <>
      <div className="">
        <MainHeading
          longitude={longitude}
          latitude={latitude}
          setLongitude={setLongitude}
          setLatitude={setLatitude}
          setCountry={(value) => {
            if (value) setCountry(value);
          }}
        />
        <MainBox
          temp={temp}
          description={description}
          time={time || "Loading..."}
          feelTemp={feelTemp}
          country={country || "Unknown Country"}
          dailyTemp={dailyTemp}
        />
        <TabelsBox
          temp={temp}
          description={description}
          time={time || "Loading..."}
          feelTemp={feelTemp}
          country={country || "Unknown Country"}
          dailyTemp={dailyTemp}
        />
        <Footer />
      </div>
    </>
  );
}
