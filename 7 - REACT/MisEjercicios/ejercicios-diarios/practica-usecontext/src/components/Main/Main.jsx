import { Calculator } from "../Calculator/Calculator";
import { Counter } from "../Counter/Counter";
import { PrimitiveCalc } from "../PrimitiveCalc/PrimitiveCalc";
import "./Main.scss";

export function Main() {
  return (
    <main>
      <Counter></Counter>
      <PrimitiveCalc></PrimitiveCalc>
      <Calculator></Calculator>
    </main>
  );
}
