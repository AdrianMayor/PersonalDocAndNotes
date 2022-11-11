import { useState } from "react";

const DataEntry = () => {
  const [searchText, setSearchText] = useState("");
  const [elements, setElements] = useState(["prueba inicial"]);

  const textUpdate = ({ target: { value } }) => {
    setSearchText(value);
  };

  const handleClick = () => {
    setElements([...elements, searchText]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Texto</label>
        <input
          type="text"
          name="text"
          id="text"
          onChange={textUpdate}
          required
        />
        <button onClick={handleClick}>Añadir</button>
      </form>
      <p>{searchText}</p>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  );
};

export default DataEntry;
