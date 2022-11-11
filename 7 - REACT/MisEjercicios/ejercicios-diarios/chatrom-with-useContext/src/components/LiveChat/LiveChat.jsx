import { useContext } from 'react'
import { ChatContext } from '../../contexts/ChatContext'
import { MessagesBox } from "../MessagesBox/MessagesBox";
import { SendMessageBox } from "../SendMessageBox/SendMessageBox";

export function LiveChat({ idUser }) {
  const [messages, recieveAllMessages] = useContext(ChatContext)
  return (
    <section className="chatBox">
      <h2>Chat of User {idUser}</h2>
      <MessagesBox messages={messages}></MessagesBox>
      <SendMessageBox
        recieveAllMessages={recieveAllMessages}
        idUser={idUser}
      ></SendMessageBox>
    </section>
  );
}
