import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShowFiles } from "./components/ShowFiles/ShowFiles";
import { UploadFiles } from "./components/UploadFiles/UploadFiles";

function App() {
  return (
    <div className="App">
      <h1>Ejecicio de Peticiones a API</h1>
      <nav>
        <menu>
          <li>
            <Link to="/">Upload Files</Link>
          </li>
          <li>
            <Link to="/files">Files List</Link>
          </li>
        </menu>
      </nav>
      <Routes>
        <Route path="/" element={<UploadFiles />} />
        <Route path="files" element={<ShowFiles />} />
      </Routes>
    </div>
  );
}

export default App;
