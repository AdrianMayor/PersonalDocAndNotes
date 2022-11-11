import { ThemeSwitcher } from "../ThemeSwticher/ThemeSwitcher";
import { Tittle } from "../Tittle/Tittle";

export const Header = () => {
  return (
    <header>
      <Tittle title={"Ejercicio Context"}></Tittle>
      <ThemeSwitcher></ThemeSwitcher>
    </header>
  );
};
