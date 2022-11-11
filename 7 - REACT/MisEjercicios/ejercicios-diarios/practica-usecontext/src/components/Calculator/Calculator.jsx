import { useContext, useState } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import { CounterContext } from "../../contexts/CounterContext";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { ScreenDisplay } from "../ScreenDisplay/ScreenDisplay";

export function Calculator() {
  const [isSecondRound, setIsSecondRound] = useState(false);

  const [
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    operator,
    setOperator,
  ] = useContext(CalculatorContext);

  const [, , , , totalCount, setTotalCount] = useContext(CounterContext);

  // Pasar al button box valor y funcion || array de arrays para pintar los botones d forma especifica

  const mainButtonPanel = [
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "/",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "=",
    "+",
    "C",
    "Del",
  ];

  function launchCalc(firstNumber, secondNumber, operator) {
    switch (operator) {
      case "+":
        setFirstNumber(firstNumber + secondNumber);
        setOperator();
        setSecondNumber(0);
        setTotalCount(totalCount + 1);
        setIsSecondRound(true);
        break;
      case "-":
        setFirstNumber(firstNumber - secondNumber);
        setOperator();
        setSecondNumber(0);
        setTotalCount(totalCount + 1);
        setIsSecondRound(true);
        break;
      case "x":
        setFirstNumber(firstNumber * secondNumber);
        setOperator();
        setSecondNumber(0);
        setTotalCount(totalCount + 1);
        setIsSecondRound(true);
        break;
      case "/":
        setFirstNumber(firstNumber / secondNumber);
        setOperator();
        setSecondNumber(0);
        setTotalCount(totalCount + 1);
        setIsSecondRound(true);
        break;

      default:
        throw new Error("Incorrect Value");
    }
  }

  function deleteScreen() {
    if (secondNumber.length > 1) {
      setSecondNumber(secondNumber.slice(0, -1));
    } else if (secondNumber !== 0 && secondNumber.length === 1) {
      setSecondNumber(0);
    } else if (operator !== undefined) {
      setOperator();
    } else if (firstNumber.length > 1) {
      setFirstNumber(firstNumber.slice(0, -1));
    } else if (firstNumber !== 0 && firstNumber.length >= 1) {
      setFirstNumber(0);
    }
  }

  function clearCalc() {
    setFirstNumber(0);
    setSecondNumber(0);
    setOperator();
  }

  function handleClick({ target: { innerHTML: input } }) {
    if (input === "Del" || input === "C") {
      input === "Del" ? deleteScreen() : clearCalc();
    } else {
      if (isNaN(input) && input !== ".") {
        if ((input === "=" || operator) && secondNumber !== 0) {
          launchCalc(
            Number(firstNumber),
            Number(secondNumber),
            operator,
            input
          );
        } else {
          setOperator(input);
        }
      } else {
        if (
          operator === undefined &&
          (input !== "0" || firstNumber.length >= 1)
        )
          firstNumber === 0 || isSecondRound
            ? setFirstNumber(input)
            : setFirstNumber(firstNumber + input);
        setIsSecondRound(false);

        if (operator)
          secondNumber === 0
            ? setSecondNumber(input)
            : setSecondNumber(secondNumber + input);
      }
    }
  }
  return (
    <section>
      <h2>Calculator</h2>
      <ScreenDisplay stage={3}></ScreenDisplay>
      <ButtonBox
        className="mainButtonPanel"
        buttons={mainButtonPanel}
        onClick={handleClick}
      ></ButtonBox>
    </section>
  );
}

/* 
Manera mas optima de realizar la calculadora usando New Function

function handleClickNuevo({ target: { innerHTML: input } }) {
  if (input === "Del") {
    const removedValue = screenValue.slice(0, -1)
    setScreenValue(removedValue.length ? removedValue : "0")
  } else if(input === "C") {
    setScreenValue("0")
  } else if(input === "=") { // || (input.match(/[+-\/*]/) && `${screenValue}`.split(/[+-\/\*]/).length > 1)
    setScreenValue(new Function(`return ${screenValue}`.replace('x', '*')).apply())
  } else {
    setScreenValue(screenValue + input)
  }
}

return (
  <section>
    <h2>Calculator</h2>
     <ScreenDisplay stage={3}></ScreenDisplay> 
    {screenValue}
    <ButtonBox
      className="mainButtonPanel"
      buttons={mainButtonPanel}
      onClick={handleClickNuevo}
    ></ButtonBox>
  </section>
); */
