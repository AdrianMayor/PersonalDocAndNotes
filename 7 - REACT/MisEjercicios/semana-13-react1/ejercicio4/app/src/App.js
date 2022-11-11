import "./App.css";
import { UserList } from "./views/UserList/UserList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>People List</h1>
      </header>
      <main>
        <UserList></UserList>
      </main>
      <footer>
        <p>AdrianMayor@</p>
      </footer>
    </div>
  );
}

export default App;
