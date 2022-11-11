import { useEffect, useState } from "react";
import "./App.css";
import { CheckPalin } from "./views/CheckPalin/CheckPalin";
import DataEntry from "./views/DataEntry/DataEntry";
import View3 from "./views/View3/View3";
import VistaPractica4 from "./views/VistaPractica4/VistaPractica4";

function App() {
  const [altura, setAltura] = useState(11);
  const [nombre] = useState("Hola Que Ase");

  useEffect(() => {
    console.info(altura);
  }, [altura]);

  return (
    <div className="App">
      <View3
        message="HJOLA A ASDA"
        handleClick={setAltura}
        miCosa={{
          nombre,
          altura,
        }}
      ></View3>
      <VistaPractica4></VistaPractica4>
      <DataEntry></DataEntry>
      <CheckPalin></CheckPalin>
    </div>
  );
}

export default App;
