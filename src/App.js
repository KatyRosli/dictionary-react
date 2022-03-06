import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-name"> Dictionary App</header>
      <div className="container">
        <div className="Dictionary-card">
          <main>
            {" "}
            <Dictionary defaultKeyword="nature" />
          </main>
        </div>
      </div>
      <footer>
        Open sourced on{" "}
        <a
          href="https://github.com/KatyRosli/dictionary-react"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          Github{" "}
        </a>
        by
        <a
          href="https://www.katyrosli.com"
          target="_blank"
          rel="nopener noreferrer"
          className="name"
        >
          {" "}
          Katy Rosli
        </a>
      </footer>
    </div>
  );
}

export default App;
