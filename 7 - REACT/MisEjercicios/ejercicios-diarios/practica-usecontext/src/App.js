import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { CalculatorProvider } from "./contexts/CalculatorContext";
import { CounterProvider } from "./contexts/CounterContext";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <CalculatorProvider>
          <Header></Header>
          <Main></Main>
        </CalculatorProvider>
      </CounterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
