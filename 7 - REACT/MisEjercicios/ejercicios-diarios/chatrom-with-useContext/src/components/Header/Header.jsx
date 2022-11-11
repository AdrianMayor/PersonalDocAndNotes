import { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";

export function Header() {
  const [messages] = useContext(ChatContext)
  return (
    <header>
      <h1>ChatRoom con {messages.length} mensages</h1>
    </header>
  );
}
