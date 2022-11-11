import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";

export function Sum() {
  const [count, setCount, , , totalCount, setTotalCount] =
    useContext(CounterContext);

  function handleSum() {
    setCount(count + 1);
    setTotalCount(totalCount + 1);
  }
  return <button onClick={handleSum}>Sum</button>;
}
