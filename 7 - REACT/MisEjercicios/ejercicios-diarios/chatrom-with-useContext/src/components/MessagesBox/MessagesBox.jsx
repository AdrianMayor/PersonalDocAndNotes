export function MessagesBox({ messages = [] }) {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>
          idUser:{message.idUser} | {message.message} |
          {new Date(message.hour).toLocaleTimeString()}
        </li>
      ))}
    </ul>
  );
}
