function Navbar(props) {
  const navStyles = {
    display: "block",
    height: "fit-content",
    width: "fit-content",
    overflow: "hidden",
    position: "sticky",
    top: "0px",
    // background: "#282c34",
    "padding": "30px"
  };

  if (props.mobile) {
    // sandwich
  } else {
    // list
    return (
      <nav className="navbar" style={{ ...navStyles }}>
        <div className="nav-container">
          <a className="logo" href="index.html">R</a>
          <a className="nav-link" href="html/portfolio.html">
            <span className="me">me</span>
          </a>
          <a className="nav-link" href="html/blog.html">
            <span className="blog">blog</span>
          </a>
          <a className="nav-link" href="html/music.html">
            <span className="music">music</span>
          </a>
        </div>
        {/* <footer className="footer-desktop">&copy; 2022 Rafi Gil Diaz</footer> */}
      </nav>
    );
  }
}

export default Navbar;
