import { CountryTypes } from "@/types/CountryTypes";
import React, { useState } from "react";
import Select from "react-select";

type CountryOption = {
  label: string;
  value: string;
  lat: number;
  lon: number;
};

const WeatherByCountry = ({ setLongitude, setLatitude }: CountryTypes) => {
  const countries = [
    { name: "Germany", lat: 52.52, lon: 13.41 },
    { name: "USA", lat: 38.9, lon: -77.03 },
    { name: "Japan", lat: 35.68, lon: 139.76 },
    { name: "France", lat: 48.85, lon: 2.35 },
    { name: "Australia", lat: -33.87, lon: 151.21 },
    { name: "England", lat: 51.5074, lon: -0.1278 },
  ];

  const options: CountryOption[] = countries.map((country) => ({
    label: country.name,
    value: country.name,
    lat: country.lat,
    lon: country.lon,
  }));

  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );

  const handleChange = (option: CountryOption | null) => {
    if (!option) return;
    setSelectedCountry(option);
    setLongitude(option.lon);
    setLatitude(option.lat);
  };

  return (
    <div>
      <Select
        options={options}
        value={selectedCountry}
        onChange={handleChange}
        placeholder="Germany"
      />
    </div>
  );
};

export default WeatherByCountry;
