"use client";
import { useState } from "react";

import { ColourSate } from "@/types/ColourTypes";
import { tailwindColours } from "@/components/colours/ColorMode";
import ToggleButton from "@/components/buttons/ToggleButton";
import MainHeading from "@/components/banners/MainHeading";

export default function Home() {
  const [isLight, setIsLight] = useState(true);
  const colourState: ColourSate = { isLight, setIsLight };
  const colours = tailwindColours(colourState);

  return (
    <>
      <main className={`${colours.background} min-h-screen flex flex-col`}>
        <MainHeading />
        {/*<div className={`${colours.text} text-lg`}>hello</div>
        <ToggleButton onClick={() => setIsLight((prev) => !prev)}>
          Toggle Colour Mode
        </ToggleButton> */}
      </main>
    </>
  );
}
