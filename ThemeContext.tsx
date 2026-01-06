import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "holographic" | "sunset" | "ocean";

interface ThemeContextType {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (switchable) {
      const stored = localStorage.getItem("theme");
      return (stored as Theme) || (defaultTheme as Theme);
    }
    return defaultTheme as Theme;
  });

  useEffect(() => {
    const root = document.documentElement;
    // Supprimer toutes les classes de thème
    root.classList.remove("dark", "holographic", "sunset", "ocean");
    // Ajouter la classe du thème actuel
    if (theme !== "light") {
      root.classList.add(theme);
    }

    if (switchable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, switchable]);

  const setTheme = switchable
    ? (newTheme: Theme) => {
        setThemeState(newTheme);
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export { type Theme };
