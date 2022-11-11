import { useState } from "react";
import { LiveChat } from "../LiveChat/LiveChat";

export function ChatRoom() {
  const [messages, setNewMessage] = useState(
    localStorage.getItem("LiveChatMessages")
      ? JSON.parse(localStorage.getItem("LiveChatMessages"))
      : []
  );

  function recieveAllMessages(newMessage) {
    const test = JSON.parse(localStorage.getItem("LiveChatMessages"))
      ? JSON.parse(localStorage.getItem("LiveChatMessages"))
      : [];
    const newMessages = [...test, newMessage];
    localStorage.setItem("LiveChatMessages", JSON.stringify(newMessages));
    setNewMessage(newMessages);
  }
  return (
    <>
      <LiveChat
        idUser={1}
        messages={messages}
        recieveAllMessages={recieveAllMessages}
      ></LiveChat>
      <LiveChat
        idUser={2}
        messages={messages}
        recieveAllMessages={recieveAllMessages}
      ></LiveChat>
    </>
  );
}
