import "./App.css";
import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header></Header>
        <Content></Content>
      </ThemeProvider>
    </div>
  );
}

export default App;
