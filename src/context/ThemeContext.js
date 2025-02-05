"use client";

import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 2000);
    const storedTheme = localStorage.getItem("theme") || "corporate";
    setTheme(storedTheme);
  }, []);

  if (!isMounted)
    return (
      <div className="h-screen w-screen  flex items-center justify-center m-0 p-0 bg-darkmode">
        <span className="loading loading-spinner loading-lg text-white"></span>
      </div>
    );
  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
