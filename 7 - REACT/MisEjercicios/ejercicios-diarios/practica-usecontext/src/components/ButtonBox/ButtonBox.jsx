import "./ButtonBox.scss";

export function ButtonBox({ buttons = [], onClick, className }) {
  return (
    <ul className={`buttonBox ${className}`}>
      {buttons.map((button, index) => (
        <li key={index}>
          <button onClick={onClick}>{button}</button>
        </li>
      ))}
    </ul>
  );
}
