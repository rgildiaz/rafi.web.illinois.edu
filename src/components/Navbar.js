// import Navlink from "./subcomponents/Navlink";
// import resume from "../assets/files/resume.pdf";

export default function Navbar(props) {
  const navStyles = {
    display: "block",
    height: "100%",
    // this is so ugly :(
    width: "calc(min(100%, 1000px) - calc(max(7vmin, 20px) * 2))",
    overflow: "hidden",
    padding: "0.5rem 0",
  };

  const innerNavStyles = {
    width: "calc(fit-content + 2em)",
    background: "rgba(21, 25, 33, 0.95)",
    borderRadius: "20px",
    padding: "10px"
  }

  return (
    <div className="nav-wrapper">
      <nav className="navbar" style={{ ...navStyles }}>
        <div className="nav-container" style={{ ...innerNavStyles }}>
          <a className="logo em" href="/#">
            R
          </a>
          {/* <Navlink
            name="linkedin"
            overrideLink="https://www.linkedin.com/in/rafael-gil-diaz/"
          />
          <Navlink name="resumé" overrideLink={resume} /> */}
        </div>
      </nav>
    </div>
  );
}
