"use client";

import React, { useState } from "react";
import ToggleButton from "@/components/buttons/ToggleButton";
import { useTheme } from "@/context/ThemeContext";
import { tailwindColours } from "@/components/colours/ColorMode";
import SubHeading from "@/components/banners/SubHeading";
import Footer from "@/components/banners/Footer";
import { useAuth } from "@/context/AuthContext";

const SettingsPage = () => {
  const { isLight, toggleTheme } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");
  const [temperatureUnit, setTemperatureUnit] = useState<"C" | "F">("C");
  const [windUnit, setWindUnit] = useState<"km/h" | "mph">("km/h");
  const [pressureUnit, setPressureUnit] = useState<"hPa" | "inHg">("hPa");
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const toggleValue = <T,>(current: T, option1: T, option2: T) =>
    current === option1 ? option2 : option1;
  const { user, userData, loading } = useAuth();

  return (
    <>
      <SubHeading text="Settings" />

      <div
        className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${colours.background} ${colours.text}`}
      >
        <main className="flex-1 p-6 space-y-8">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-700 pb-2">
              Theme Settings
            </h2>
            <div className="flex items-center justify-between">
              <span>App Theme</span>
              <ToggleButton onClick={toggleTheme}>
                {isLight ? "Dark Mode" : "Light Mode"}
              </ToggleButton>
            </div>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-700 pb-2">
              Time Format
            </h2>
            <div className="flex items-center justify-between">
              <span>Time Format</span>
              <button
                className="px-4 py-2 rounded-lg border bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                onClick={() =>
                  setTimeFormat(toggleValue(timeFormat, "12h", "24h"))
                }
              >
                {timeFormat}
              </button>
            </div>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-700 pb-2">
              Units of Measurement
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Temperature</span>
                <button
                  className="px-4 py-2 rounded-lg border bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  onClick={() =>
                    setTemperatureUnit(toggleValue(temperatureUnit, "C", "F"))
                  }
                >
                  {temperatureUnit}
                </button>
              </div>
            </div>
          </section>
          {user ? (
            <section className="space-y-3">
              <h2 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-700 pb-2">
                Location Settings
              </h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Use Current Location</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Default City</span>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline">
                    Manage
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <></>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SettingsPage;
