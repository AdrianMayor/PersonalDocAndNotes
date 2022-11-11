import { useState } from "react";
import { MessagesBox } from "../MessagesBox/MessagesBox";
import { SendMessageBox } from "../SendMessageBox/SendMessageBox";

export function ChatBox() {
  const [messages, setNewMessage] = useState([]);
  console.log(messages);

  function recieveAllMessages(newMessage) {
    const newMessages = [...messages, newMessage];
    setNewMessage(newMessages);
  }

  return (
    <section className="chatBox">
      <MessagesBox messages={messages}></MessagesBox>
      <SendMessageBox recieveAllMessages={recieveAllMessages}></SendMessageBox>
    </section>
  );
}
