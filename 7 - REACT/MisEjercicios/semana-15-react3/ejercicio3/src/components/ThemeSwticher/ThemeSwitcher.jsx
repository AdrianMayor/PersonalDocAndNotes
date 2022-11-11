import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const handleClick = () => {
    setTheme(!theme);
  };
  return <button onClick={handleClick}>{theme ? "🌙" : "🌞"}</button>;
};
