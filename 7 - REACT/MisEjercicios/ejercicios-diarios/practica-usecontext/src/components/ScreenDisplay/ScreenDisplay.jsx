import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import { CounterContext } from "../../contexts/CounterContext";
import "./ScreenDisplay.scss";
export function ScreenDisplay({ stage }) {
  const [count, , PrimitiveResult] = useContext(CounterContext);
  const [firstNumber, , secondNumber, , operator] =
    useContext(CalculatorContext);

  return (
    <div className="screen">
      {stage === 1 && <p>{count}</p>}
      {stage === 2 && <p>{PrimitiveResult}</p>}
      {stage === 3 && (
        <p>
          {firstNumber +
            " " +
            (operator !== undefined ? operator : "") +
            " " +
            (secondNumber !== 0 ? secondNumber : "")}
        </p>
      )}
    </div>
  );
}
