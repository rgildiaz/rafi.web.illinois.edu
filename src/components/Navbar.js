import Navlink from "./Navlink";

function Navbar(props) {
  const navStyles = {
    display: "block",
    height: "fit-content",
    width: "fit-content",
    overflow: "hidden",
    position: "sticky",
    top: "30px",
    "margin": "30px",
  };

  if (props.mobile) {
    // sandwich
  } else {
    // list
    return (
      <nav className="navbar" style={{ ...navStyles }}>
        <div className="nav-container">
          <a className="logo em" href="#">R</a>
          <Navlink name="me"/>
          <Navlink name="blog"/>
          <Navlink name="music"/>
        </div>
        {/* <footer className="footer-desktop">&copy; 2022 Rafi Gil Diaz</footer> */}
      </nav>
    );
  }
}

export default Navbar;
