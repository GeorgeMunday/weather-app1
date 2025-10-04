"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextProps {
  isLight: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isLight: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLight, setIsLight] = useState(true);

  // Load saved theme on first render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsLight(storedTheme === "light");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // Optional: follow system preference if no saved theme
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsLight(!prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Save theme and update document class when toggled
  useEffect(() => {
    localStorage.setItem("theme", isLight ? "light" : "dark");
    document.documentElement.classList.toggle("dark", !isLight);
  }, [isLight]);

  const toggleTheme = () => setIsLight((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
