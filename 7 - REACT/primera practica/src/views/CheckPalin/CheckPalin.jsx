import { useState } from "react";

export const CheckPalin = () => {
  const [searchText, setSearchText] = useState("");
  const textUpdate = ({ target: { value } }) => {
    const esPalindromo = value === value.split("").reverse().join("");

    setSearchText(
      value.length > 0
        ? esPalindromo
          ? "Es palindromo"
          : "No es palindromo"
        : "Introduce una palabra"
    );
  };

  return (
    <>
      <label htmlFor="text">Texto</label>
      <input type="text" name="text" id="text" onChange={textUpdate} required />
      {textUpdate !== "" ? <p>{searchText}</p> : <p>Introduce una palabra</p>}
    </>
  );
};
