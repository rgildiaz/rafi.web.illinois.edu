const footerStyles = {
    fontSize: "12px",
    color: "gray",
    textAlign: "center",
    paddingBottom: "30px",
  };

export default function Footer() {
  return (
    <footer className="footer" style={{ ...footerStyles }}>
      &copy; Rafi Gil Diaz 2022 |{" "}
      <a
        href="https://github.com/rgildiaz/rafi.web.illinois.edu"
        rel="noreferrer"
        target="_blank"
      >
        source code
      </a>
    </footer>
  );
}
