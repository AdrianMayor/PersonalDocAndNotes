import { useState } from "react";
import "./App.css";
import { ItemList } from "./components/ItemList/ItemList";
import { NewPost } from "./components/NewPost/NewPost";

function App() {
  const [fullList, setFullList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      <NewPost
        fullList={fullList}
        setFullList={setFullList}
        setLoading={setLoading}
      ></NewPost>

      <ItemList
        fullList={fullList}
        setFullList={setFullList}
        isLoading={isLoading}
        setLoading={setLoading}
      ></ItemList>
    </div>
  );
}

export default App;
