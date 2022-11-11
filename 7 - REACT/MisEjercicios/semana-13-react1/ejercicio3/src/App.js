import "./App.css";

function App() {
  const prueba = () => Math.random() * 240;
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: `rgba(${prueba()}, ${prueba()}, ${prueba()})`,
        }}
      >
        Pruebiñá
      </h1>
      <p className="important"> Ser importante como filosofia de vida</p>
    </div>
  );
}

export default App;
