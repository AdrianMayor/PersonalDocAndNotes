import "./IsAdult.css";

const IsAdult = ({ age }) => {
  console.log(age);
  return age < 18 ? <p className="isAdult"> -18 </p> : "";
};

export default IsAdult;
