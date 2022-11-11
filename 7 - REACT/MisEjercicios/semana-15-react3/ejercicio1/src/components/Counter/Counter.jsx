import { useCounter } from "../../hooks/counterHook";
import { Buttons } from "../Buttons/Buttons";
import { Display } from "../Display/Display";
import { SetCounter } from "../SetCounter/SetCounter";

export const Counter = () => {
  const { counter, increase, decrement, reset } = useCounter();

  const buttons = [
    { value: "+", onClick: increase },
    { value: "-", onClick: decrement },
    { value: "Reset", onClick: reset },
  ];

  const handleSet = ({ target: { value } }) => {
    reset(value);
  };

  return (
    <section>
      <h1>Ejercicio realizado en componentes</h1>
      <Display counter={counter}></Display>
      <Buttons onClick={(event) => event()} buttons={buttons}></Buttons>
      <SetCounter onChange={handleSet}></SetCounter>

      <h1>Ejercicio realizado sobre el mismo componente </h1>
      <h1>{counter}</h1>
      <button onClick={increase}> + (en el mismo componente)</button>
      <button onClick={decrement}> - (en el mismo componente)</button>
      <button onClick={reset}>reset (en el mismo componente)</button>
      <input
        type="number"
        onChange={(event) => reset(event.target.value)}
        min="0"
      ></input>
    </section>
  );
};
