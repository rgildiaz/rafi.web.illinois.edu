// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import AppHeader from "./components/AppHeader.js";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const wrapperStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const mainContentStyles = {
  height: "fit-content",
  width: "min(100%, 1000px)",
  justifyContent: "center",
};

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Navbar />
      <div id="content-wrapper" style={{ ...wrapperStyles }}>
        <div id="main-content" style={{ ...mainContentStyles }}>
          <About />
          <Experience />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
