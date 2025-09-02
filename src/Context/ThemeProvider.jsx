import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });


  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext}
