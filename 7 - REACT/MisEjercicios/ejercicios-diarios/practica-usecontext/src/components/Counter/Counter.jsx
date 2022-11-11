import { ScreenDisplay } from "../ScreenDisplay/ScreenDisplay";
import { Substract } from "../Substract/Substract";
import { Sum } from "../Sum/Sum";
import "./Counter.scss";
export function Counter() {
  return (
    <section>
      <h2>1º Stage: Counter</h2>
      <ScreenDisplay stage={1}></ScreenDisplay>
      <div className="counterButtons">
        <Sum></Sum>
        <Substract></Substract>
      </div>
    </section>
  );
}
