import { useEffect, useState } from "react";
import Button from "./Button";

const ButtonList = () => {
  const [color, setColor] = useState("rgba(255,255,255)");

  const randomColor = () => {
    const randomazer = () => Math.round(Math.random() * 255);
    setColor(`rgba(${randomazer()}, ${randomazer()}, ${randomazer()})`);
  };

  useEffect(() => {
    let time = 0;

    const interval = setInterval(() => {
      setTimeout(() => {
        console.clear();
      }, 1500);
      console.log(time++);
    }, 1000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <>
      <div
        className="content"
        style={{ backgroundColor: color, height: "100vh" }}
      >
        <Button className="black" onClick={() => setColor("rgba(0,0,0)")}>
          Negro
        </Button>
        <Button className="red" onClick={() => setColor("rgba(255,0,0)")}>
          Rojo
        </Button>
        <Button className="blue" onClick={() => setColor("rgba(0,0,255)")}>
          Azul
        </Button>
        <Button className="green" onClick={() => setColor("rgba(0,255,0)")}>
          Verde
        </Button>
        <Button className="random" onClick={randomColor}>
          Aleatorio
        </Button>
      </div>
    </>
  );
};

export default ButtonList;
