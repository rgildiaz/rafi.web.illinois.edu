// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import AppHeader from "./components/AppHeader";

const mainContentStyles = {
  height: "1000vh",
};

const footerStyles = {
  fontSize: "12px",
}

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Navbar />
      <div className="main-content" style={{ ...mainContentStyles }}></div>
      <footer className="footer" style={{ ...footerStyles }}>
        <p>&copy; Rafi Gil Diaz 2022</p>
      </footer>
    </div>
  );
}

export default App;
