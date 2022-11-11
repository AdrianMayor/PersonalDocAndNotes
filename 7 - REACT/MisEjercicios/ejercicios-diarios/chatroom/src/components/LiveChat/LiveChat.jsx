import { MessagesBox } from "../MessagesBox/MessagesBox";
import { SendMessageBox } from "../SendMessageBox/SendMessageBox";

export function LiveChat({ idUser, messages, recieveAllMessages }) {
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
