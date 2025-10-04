"use client";

import { useEffect, useState } from "react";
import { getWeather } from "@/Api/Weather";
import MainHeading from "@/components/banners/MainHeading";
import MainBox from "@/components/boxes/MainBox";
import { weatherCodeDescriptions } from "@/Api/CodeDescriptions";
import { countryTimeZones } from "@/Api/TimeZones";
import Footer from "@/components/banners/Footer";
import TabelsBox from "@/components/boxes/TabelsBox";
import MissingFeatures from "@/components/boxes/FeaturesBox";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const [temp, setTemp] = useState<number | null>(null);
  const [feelTemp, setFeelTemp] = useState<number[]>([]);
  const [description, setDescription] = useState<string | null>(null);
  const [dailyTemp, setDailyTemp] = useState<number[]>([]);
  const [rainChance, setRainChance] = useState<number[]>([]);
  const [humidity, setHumidity] = useState<number[]>([]);
  const [cloudCover, setCloudCover] = useState<number[]>([]);
  const [wind, setWind] = useState<number[]>([]);
  const [visibility, setVisibility] = useState<number[]>([]);

  const [longitude, setLongitude] = useState(-0.1278);
  const [latitude, setLatitude] = useState(51.5074);
  const [country, setCountry] = useState("England");

  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");

  const { user } = useAuth();

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
      setDailyTemp(temps.slice(0, 25));

      const rainChances = Array.from(
        weather.hourly?.precipitation_probability || []
      );
      setRainChance(rainChances.slice(0, 25));

      const humidityData = Array.from(
        weather.hourly?.relative_humidity_2m || []
      );
      setHumidity(humidityData.slice(0, 25));

      const cloudData = Array.from(weather.hourly?.cloud_cover || []);
      setCloudCover(cloudData.slice(0, 25));

      const windData = Array.from(weather.hourly?.wind_speed_10m || []);
      setWind(windData.slice(0, 25));

      const visData = Array.from(weather.hourly?.visibility || []);
      setVisibility(visData.slice(0, 25));
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
          rainChance={rainChance}
          humidity={humidity}
          cloudCover={cloudCover}
          wind={wind}
          visibility={visibility}
        />
        <TabelsBox
          temp={temp}
          description={description}
          time={time || "Loading..."}
          feelTemp={feelTemp}
          country={country || "Unknown Country"}
          dailyTemp={dailyTemp}
          rainChance={rainChance}
          humidity={humidity}
          cloudCover={cloudCover}
          wind={wind}
          visibility={visibility}
        />
        {user ? <></> : <MissingFeatures />}
        <Footer />
      </div>
    </>
  );
}
