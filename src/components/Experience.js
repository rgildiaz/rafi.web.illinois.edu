import Section from "./subcomponents/Section";
import Card from "./subcomponents/Card";
import Link from "./subcomponents/Link";

export default function Experience() {
  return (
    <Section name="what i've done">
      <Card name="dstl" date="fall 22" align="right">
        <Link href="https://uiucdstl.wixsite.com/uiucdstl">website</Link>|<Link href="https://github.com/rgildiaz/dstl-mockups">github</Link>
        <p>
          on the{" "}
          <Link href="https://ischool.illinois.edu/research/projects/data-storytelling-toolkit-libraries-dstl">
            data storytelling toolkit for librarians
          </Link>{" "}
          team, i've cleaned and stored data using python and mysql, generated
          dashboards with <Link href="https://grafana.com/">grafana</Link> and{" "}
          <Link href="https://vega.github.io/vega-lite/">vega-lite</Link>, and
          helped develop maps and templates for common data stories.
        </p>
      </Card>
      <Card name="docs" date="summer/fall 22" align="right">
        <Link href="https://github.com/rgildiaz/iti">github</Link>
        <p>
          during my internship at the{" "}
          <Link href="https://iti.illinois.edu/">
            Information Trust Institute
          </Link>{" "}
          i've ended up writing a lot of documentation. it's all stored here.
        </p>
      </Card>
      <Card name="genz" date="spring 22" align="left">
        <Link href="https://github.com/rgildiaz/genz">github</Link>
        <p>
          my first "real" foray into generative music and an extension of{" "}
          <a href="#genesis">genesis</a>, written in{" "}
          <Link href="https://supercollider.github.io/">SuperCollider</Link>.
        </p>
      </Card>
      <Card name="familiarity" date="spring 22" align="left">
        <Link href="https://soundcloud.com/rafigildiaz/familiarity">
          soundcloud
        </Link>
        <p>
          a text-to-sound electroacoustic composition that takes heavy advantage
          of granular synthesis. every sound was sourced from a single recording
          of my voice.
        </p>
      </Card>
      <Card name="word-music" date="fall 21" align="left">
        <Link href="https://github.com/rgildiaz/Word-Music">github</Link>
        <p>
          one of my first full-length computer music projects,{" "}
          <strong>word-music</strong> seeks to sonify textual data. i wrote it
          in a combination of Python and{" "}
          <Link href="https://supercollider.github.io/">SuperCollider</Link>.
        </p>
      </Card>
    </Section>
  );
}
