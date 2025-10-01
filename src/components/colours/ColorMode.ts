import { ColourSate } from "@/types/ColourTypes";

const LightMode = {
  background: "bg-white",
  text: "text-gray-900",
  card: "bg-gray-50",
  border: "border-gray-200",
  button: "bg-blue-600 hover:bg-blue-700 text-white",
  accent: "text-blue-600",
};

const DarkMode = {
  background: "bg-gray-900",
  text: "text-gray-100",
  card: "bg-gray-800",
  border: "border-gray-700",
  button: "bg-blue-500 hover:bg-blue-600 text-white",
  accent: "text-blue-400",
};

export const tailwindColours = ({ isLight }: ColourSate) => {
  return isLight ? LightMode : DarkMode;
};
