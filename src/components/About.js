import Section from './subcomponents/Section'

export default function About() {
  return (
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
          <a href="https://iti.illinois.edu/" target="_blank" rel="noreferrer">
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
          a <strong>musician</strong> interested in algorithmic composition and
          computer music, and
        </li>
        <li>
          a <strong>team lead</strong> at UIUC's tech services help desk.
        </li>
      </ul>
    </Section>
  );
}
