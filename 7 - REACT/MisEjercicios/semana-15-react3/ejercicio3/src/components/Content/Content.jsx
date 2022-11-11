import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Content = () => {
  const [theme] = useContext(ThemeContext);

  const themeSelected = () => {
    return theme ? "gray" : "black";
  };

  return (
    <section style={{ backgroundColor: themeSelected() }}>
      <h2>Welcome to my app</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ipsum
        quidem harum soluta minima. Laboriosam nostrum repudiandae atque aperiam
        accusantium porro, facere et optio nam, fuga temporibus voluptatem?
        Nostrum, iure!
      </p>
    </section>
  );
};
