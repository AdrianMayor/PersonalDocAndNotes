import { useEffect, useState } from "react";

export const useCounter = ({ initialValue = 0 } = {}) => {
  const [counter, setCounter] = useState(initialValue < 0 ? 0 : initialValue);

  useEffect(() => {
    document.title = `El contador vale ${counter}`;
  }, [counter]);

  const increase = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const reset = (value = 0) => setCounter(value > 0 ? value : 0);

  return {
    counter,
    increase,
    decrement,
    reset,
  };
};
