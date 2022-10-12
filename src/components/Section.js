export default function Section(props) {
  const align = Math.round(Math.random()) ? "left" : "right";
  const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: align,
    justifyContent: align,
    textAlign: align,
    margin: "max(9vmin, 20px)"
  };

  return (
    <section id={props.name} style={{ ...sectionStyles }}>
      <h2>{props.name}</h2>
      <div className="card-container">{props.children}</div>
    </section>
  );
}
