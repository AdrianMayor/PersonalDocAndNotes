import { useState } from "react";

export function SendMessageBox({ recieveAllMessages, idUser }) {
  const [rawInput, setRawInput] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    recieveAllMessages(rawInput);
  }

  const handleMessage = ({ target: { value } }) => {
    const newInput = {
      idUser: idUser,
      message: value,
      hour: new Date().toLocaleString(),
    };
    setRawInput(newInput);
  };

  return (
    <form className="sendMessage__Content" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Send a message"
        onChange={handleMessage}
      ></input>
      <button>Send</button>
    </form>
  );
}
