import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";

export function Substract() {
  const [count, setCount, , , totalCount, setTotalCount] =
    useContext(CounterContext);

  function handleSubstract() {
    setCount(count - 1);
    setTotalCount(totalCount + 1);
  }

  return <button onClick={handleSubstract}>Substract</button>;
}
