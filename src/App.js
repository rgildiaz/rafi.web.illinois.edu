// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import CaretDown from "./components/ScrollElement";

const mainContentStyles = {
  height: "1000vh",
};

const caretStyles = {
  position: "absolute",
  bottom: "0px",
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hi, I'm <span className="em">Rafi</span>.
        </h1>
        <CaretDown style={{ ...caretStyles }}></CaretDown>
      </header>
      <Navbar></Navbar>
      <div className="main-content" style={{ ...mainContentStyles }}></div>
      <footer className="footer" style={{"font-size": "12px"}}>
        <p>&copy; Rafi Gil Diaz 2022</p>
      </footer>
    </div>
  );
}

export default App;
