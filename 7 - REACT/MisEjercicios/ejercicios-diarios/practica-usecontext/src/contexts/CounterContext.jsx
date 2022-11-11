import React, { useState } from "react";

export const CounterContext = React.createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [PrimitiveResult, setPrimitiveResult] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  return (
    <CounterContext.Provider
      value={[
        count,
        setCount,
        PrimitiveResult,
        setPrimitiveResult,
        totalCount,
        setTotalCount,
      ]}
    >
      {children}
    </CounterContext.Provider>
  );
};
