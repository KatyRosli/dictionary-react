import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="text-center"> Dictionary App</header>
      <div className="container">
        <main>
          {" "}
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
