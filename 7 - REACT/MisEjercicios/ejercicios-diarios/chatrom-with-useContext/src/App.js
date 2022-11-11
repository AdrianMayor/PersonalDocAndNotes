import { useContext, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ChatContext } from "./contexts/ChatContext";

function App() {
  const [users, setUsers] = useState(['root'])
  const [,,clearAllMessages] = useContext(ChatContext)
  const addUser = () => {
    setUsers([...users, users.length + 1])
  }
  return (
    <div className="App">
      <Header></Header>
      <button onClick={addUser}>Añadir nuevo usuario</button>
      <button onClick={clearAllMessages}>Clear Chats</button>
      <Main users={users}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
