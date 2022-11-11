import { useContext, useState } from "react";
import { CounterContext } from "../../contexts/CounterContext";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { ScreenDisplay } from "../ScreenDisplay/ScreenDisplay";
import "./PrimitiveCalc.scss";

export function PrimitiveCalc() {
  const [, , PrimitiveResult, setPrimitiveResult, totalCount, setTotalCount] =
    useContext(CounterContext);
  const [operator, setOperator] = useState(true);

  const buttons = ["+", "-", 0, 7, 8, 9, 4, 5, 6, 1, 2, 3];

  function handleClick({ target: { innerHTML: input } }) {
    if (isNaN(input)) {
      input === "+" ? setOperator(true) : setOperator(false);
    } else {
      input = Number(input);

      operator
        ? setPrimitiveResult(PrimitiveResult + input)
        : setPrimitiveResult(PrimitiveResult - input);
      setTotalCount(totalCount + 1);
    }
  }

  // guardar 1 , -1 y multiplicar
  return (
    <section className="primitiveCalc">
      <h2>2º Stage: Primitive Calc</h2>
      <ScreenDisplay stage={2}></ScreenDisplay>
      <ButtonBox buttons={buttons} onClick={handleClick}></ButtonBox>
    </section>
  );
}
