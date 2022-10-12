import Navlink from "./Navlink";

function Navbar(props) {
  const navStyles = {
    display: "block",
    height: "100%",
    // this is so ugly :(
    width: "calc(min(100%, 1000px) - calc(max(10vh, 40px) * 2))",
    overflow: "hidden",
    padding: "30px 0 30px 0",
  };

  return (
    <div className="nav-wrapper">
      <nav className="navbar" style={{ ...navStyles }}>
        <div className="nav-container" style={{ width: "fit-content" }}>
          <a className="logo em" href="/#">
            R
          </a>
          <Navlink
            name="linkedin"
            overrideLink="https://www.linkedin.com/in/rafael-gil-diaz/"
          />
          <Navlink name="github" overrideLink="https://github.com/rgildiaz" />
        </div>
        {/* <footer className="footer-desktop">&copy; 2022 Rafi Gil Diaz</footer> */}
      </nav>
    </div>
  );
}

export default Navbar;
