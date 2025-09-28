import { CountryTypes } from "@/types/CountryTypes";
import React, { useState, useEffect } from "react";
import Select from "react-select";

type CountryOption = {
  label: string;
  value: string;
  lat: number;
  lon: number;
};

const WeatherByCountry = ({
  setLongitude,
  setLatitude,
  setCountry,
}: CountryTypes) => {
  const countries = [
    { name: "England", lat: 51.5074, lon: -0.1278 },
    { name: "Germany", lat: 52.52, lon: 13.41 },
    { name: "Japan", lat: 35.68, lon: 139.76 },
    { name: "France", lat: 48.85, lon: 2.35 },
    { name: "Australia", lat: -33.87, lon: 151.21 },
    { name: "USA", lat: 38.9, lon: -77.03 },
    { name: "Canada", lat: 45.4215, lon: -75.6972 },
    { name: "Brazil", lat: -15.7939, lon: -47.8828 },
    { name: "India", lat: 28.6139, lon: 77.209 },
    { name: "China", lat: 39.9042, lon: 116.4074 },
    { name: "Russia", lat: 55.7558, lon: 37.6173 },
    { name: "South Africa", lat: -25.7461, lon: 28.1881 },
    { name: "Italy", lat: 41.9028, lon: 12.4964 },
    { name: "Mexico", lat: 19.4326, lon: -99.1332 },
    { name: "Spain", lat: 40.4168, lon: -3.7038 },
    { name: "South Korea", lat: 37.5665, lon: 126.978 },
  ];

  const options = countries.map((country) => ({
    label: country.name,
    value: country.name,
    lat: country.lat,
    lon: country.lon,
  }));

  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    options.find((c) => c.label === "") || null
  );

  const handleChange = (option: (typeof options)[0] | null) => {
    if (!option) return;
    setSelectedCountry(option);
    setLongitude(option.lon);
    setLatitude(option.lat);
    setCountry(option.label);
  };

  return (
    <Select
      options={options}
      value={selectedCountry}
      onChange={handleChange}
      placeholder="Select a country"
      className="w-48 sm:w-md"
    />
  );
};

export default WeatherByCountry;
