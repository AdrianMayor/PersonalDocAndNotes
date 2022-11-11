export const Buttons = ({ buttons, onClick }) => {
  return (
    <ul>
      {buttons.map((button) => (
        <li key={button.value}>
          <button onClick={() => onClick(button.onClick)}>
            {button.value}
          </button>
        </li>
      ))}
    </ul>
  );
};
