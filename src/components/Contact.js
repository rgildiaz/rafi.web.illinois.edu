import ghLogo from "../assets/icons/github64.png";
import liLogo from "../assets/icons/linkedin.png";
import emailLogo from "../assets/icons/alternate_email_FILL0_wght400_GRAD0_opsz48.svg";
import scLogo from "../assets/icons/soundcloud.png";
import Section from "./subcomponents/Section";

export default function Contact() {
  return (
    <Section name="where you can find me">
      <div className="contacts-container">
        <a
          href="https://www.linkedin.com/in/rafael-gil-diaz/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={liLogo} alt="linkedin" />
        </a>
        <a href="https://github.com/rgildiaz" rel="noreferrer" target="_blank">
          <img src={ghLogo} alt="github" />
        </a>
        <a href="mailto:rfgildiaz@gmail.com" rel="noreferrer" target="_blank">
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
  );
}
