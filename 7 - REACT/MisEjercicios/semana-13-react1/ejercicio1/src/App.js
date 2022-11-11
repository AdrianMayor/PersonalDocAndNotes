import "./App.css";

function App() {
  console.log("%PUBLIC_URL%/pic.jpg");
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "pic.jpg"}
          className="App-logo"
          alt="logo"
        />
        <p>{process.env.REACT_APP_PRUEBA}</p>
        <img src="%PUBLIC_URL%/pic.jpg" alt="logo" />
      </header>
    </div>
  );
}

export default App;
