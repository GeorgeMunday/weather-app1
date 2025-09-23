import { ColourSate } from "@/types/ColourTypes";

const LightMode = {
  background: "bg-white",
  text: "text-black",
  card: "bg-white",
  border: "border-blue-300",
  button: "bg-blue-500 hover:bg-blue-600 text-white",
  accent: "text-blue-700",
};

const DarkMode = {
  background: "bg-black",
  text: "text-white",
  card: "bg-gray-800",
  border: "border-gray-700",
  button: "bg-gray-700 hover:bg-gray-600 text-gray-100",
  accent: "text-red-400",
};

export const tailwindColours = ({ isLight }: ColourSate) => {
  return isLight ? LightMode : DarkMode;
};
