import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div id="App">
      <div class="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido</h1>
        <p>
        a la Diplomatura en react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Aprendé los fundamentos teóricos para desarrollar y desplegar un cliente React JS que se conecte con un servidor NodeJS.
        </a>
      </header>
      </div>
    </div>
  );
}

export default App;
