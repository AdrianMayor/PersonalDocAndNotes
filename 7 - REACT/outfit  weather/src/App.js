import "./App.css";
import { Clothes } from "./views/Clothes";

import Prediction from "./views/Prediction";

function App() {
  return (
    <div className="App">
      <Prediction></Prediction>
      <Clothes></Clothes>
    </div>
  );
}

export default App;
