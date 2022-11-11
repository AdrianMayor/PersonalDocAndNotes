import React, { useState } from "react";

export const CalculatorContext = React.createContext();

export const CalculatorProvider = ({ children }) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState();

  return (
    <CalculatorContext.Provider
      value={[
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        operator,
        setOperator,
      ]}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
