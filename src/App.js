// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import AppHeader from "./components/AppHeader.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import ghLogo from "./assets/icons/github64.png";
import liLogo from "./assets/icons/linkedin.png";
import emailLogo from "./assets/icons/alternate_email_FILL0_wght400_GRAD0_opsz48.svg";
import scLogo from "./assets/icons/soundcloud.png";

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

const footerStyles = {
  fontSize: "12px",
  color: "gray",
  textAlign: "center",
  paddingBottom: "30px",
};

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Navbar />
      <div id="content-wrapper" style={{ ...wrapperStyles }}>
        <div id="main-content" style={{ ...mainContentStyles }}>
          <Section name="who i am">
            <ul>
              <li>
                a <strong>student</strong> at UIUC studying{" "}
                <a
                  href="https://ischool.illinois.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  information science
                </a>{" "}
                and{" "}
                <a
                  href="https://music.illinois.edu/area/music-technology"
                  target="_blank"
                  rel="noreferrer"
                >
                  music technology
                </a>
                ,
              </li>
              <li>
                an <strong>operations support intern</strong> at the{" "}
                <a
                  href="https://iti.illinois.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Information Trust Institute
                </a>
                ,
              </li>
              <li>
                an <strong>undergraduate researcher</strong> helping build a{" "}
                <a
                  href="https://uiucdstl.wixsite.com/uiucdstl"
                  target="_blank"
                  rel="noreferrer"
                >
                  data storytelling toolkit for librarians
                </a>
                ,
              </li>
              <li>
                a <strong>musician</strong> interested in algorithmic
                composition and computer music, and
              </li>
              <li>
                a <strong>team lead</strong> at the tech services help desk.
              </li>
            </ul>
          </Section>
          <Section name="what i've done">
            <Card name="genz" date="spring 22">
              <a
                href="https://github.com/rgildiaz/genz"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <p>
                my first "real" foray into generative music and an extension of{" "}
                <a href="#genesis">genesis</a>, written in{" "}
                <a
                  href="https://supercollider.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SuperCollider
                </a>
                {"."}
              </p>
            </Card>
            <Card name="word-music" date="fall 21">
              <a
                href="https://github.com/rgildiaz/Word-Music"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <p>
                one of my first full-length computer music projects,{" "}
                <strong>word-music</strong> seeks to sonify textual data. i
                wrote it in a combination of Python and{" "}
                <a
                  href="https://supercollider.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SuperCollider
                </a>
                .
              </p>
            </Card>
            <Card name="documentation" date="summer/fall 22">
              <a
                href="https://github.com/rgildiaz/iti"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <p>
                during my internship at the{" "}
                <a
                  href="https://iti.illinois.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Information Trust Institute
                </a>{" "}
                i've ended up writing a lot of documentation. it's all stored
                here.
              </p>
            </Card>
            <Card name="genesis" date="winter 21/22">
              <a
                href="https://youtu.be/1MvuOFsNN48"
                target="_blank"
                rel="noreferrer"
              >
                youtube
              </a>
              <p>
                my first attempt at generative music, written in{" "}
                <a
                  href="https://supercollider.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SuperCollider
                </a>
                . later extended as <a href="#genz">genz</a>.
              </p>
            </Card>
            <Card name="familiarity" date="spring 22">
              <a
                href="https://soundcloud.com/rafigildiaz/familiarity"
                target="_blank"
                rel="noreferrer"
              >
                soundcloud
              </a>
              <p>
                a text-to-sound electroacoustic composition that takes heavy
                advantage of granular synthesis. every sound was sourced from a
                single recording of my voice.
              </p>
            </Card>
            <Card name="rain" date="spring 20">
              <div className="card-links">
                <a href="https://github.com/rgildiaz/Rain">github</a>
                {"|"}
                <a href="https://youtu.be/lm1t6GOWZFE">youtube</a>
              </div>
              <p>
                this is my first piece of electroacoustic music, and it was my
                first introduction to{" "}
                <a
                  href="https://supercollider.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SuperCollider
                </a>
                .
              </p>
            </Card>
          </Section>
          <Section name="where you can find me">
            <div className="contacts-container">
              <a
                href="https://www.linkedin.com/in/rafael-gil-diaz/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={liLogo} alt="linkedin" />
              </a>
              <a
                href="https://github.com/rgildiaz"
                rel="noreferrer"
                target="_blank"
              >
                <img src={ghLogo} alt="github" />
              </a>
              <a
                href="mailto:rfgildiaz@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <img src={emailLogo} alt="email" />
              </a>
              <a
                href="https://soundcloud.com/rafigildiaz"
                rel="noreferrer"
                target="_blank"
              >
                <img src={scLogo} alt="soundcloud" />
              </a>
            </div>
          </Section>
        </div>
      </div>
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
    </div>
  );
}

export default App;
