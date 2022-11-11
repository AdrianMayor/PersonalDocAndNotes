import PropTypes from "prop-types";
import ExampleStateWithClass from "../../components/ExampleStateWithClass";

const View3 = ({ message, miCosa, handleClick }) => {
  const ejecutate = () => {
    handleClick(miCosa.altura * 0.5 + 63);
  };

  return (
    <div>
      <h1>{message}</h1>
      <div>
        {miCosa.nombre} {miCosa.altura}
      </div>
      <button onClick={ejecutate}>SUMAME!!!!</button>

      <hr />
      <ExampleStateWithClass></ExampleStateWithClass>
      <hr />
    </div>
  );
};

View3.propTypes = {
  message: PropTypes.string.isRequired,
  miCosa: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    altura: PropTypes.number,
  }).isRequired,
};

export default View3;
