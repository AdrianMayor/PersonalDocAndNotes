import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";
import "./OperationCount.scss";

export function OperationCount() {
  const [, , , , totalCount] = useContext(CounterContext);

  return (
    <p className="operationCount">{`The total operation count is ${totalCount}`}</p>
  );
}
