import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "dark-luxury" | "gold-luxury" | "midnight-blue" | "emerald-executive";

export interface ThemeColors {
  primary: string;
  light: string;
  dark: string;
  bg: string;
  cardBg: string;
  border: string;
}

export const themeColorsMap: Record<ThemeType, ThemeColors> = {
  "dark-luxury": {
    primary: "#D4AF37",
    light: "#F3E5AB",
    dark: "#AA7C11",
    bg: "#000000",
    cardBg: "rgba(8, 8, 8, 0.65)",
    border: "rgba(212, 175, 55, 0.12)",
  },
  "gold-luxury": {
    primary: "#E2C044",
    light: "#FDF0CD",
    dark: "#B89110",
    bg: "#0C0A02",
    cardBg: "rgba(20, 18, 12, 0.75)",
    border: "rgba(226, 192, 68, 0.2)",
  },
  "midnight-blue": {
    primary: "#38BDF8",
    light: "#BAE6FD",
    dark: "#0284C7",
    bg: "#030712",
    cardBg: "rgba(17, 24, 39, 0.7)",
    border: "rgba(56, 189, 248, 0.15)",
  },
  "emerald-executive": {
    primary: "#10B981",
    light: "#A7F3D0",
    dark: "#047857",
    bg: "#011c15",
    cardBg: "rgba(6, 78, 59, 0.3)",
    border: "rgba(16, 185, 129, 0.18)",
  },
};

interface ThemeContextType {
  theme: ThemeType;
  colors: ThemeColors;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("chronis-theme");
    return (saved as ThemeType) || "dark-luxury";
  });

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("chronis-theme", newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove(
      "theme-dark-luxury",
      "theme-gold-luxury",
      "theme-midnight-blue",
      "theme-emerald-executive"
    );
    // Add current theme class
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const colors = themeColorsMap[theme];

  return (
    <ThemeContext.Provider value={{ theme, colors, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
