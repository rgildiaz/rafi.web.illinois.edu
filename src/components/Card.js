export default function Card(props) {
  const align = Math.round(Math.random()) ? "left" : "right";
  const cardStyles = {
    background: `rgba(
      ${40 * getFloatInRange(0.5, 1)}, 
      ${44 * getFloatInRange(0.5, 1)}, 
      ${52 * getFloatInRange(0.7, 1.1)}, 
      ${getFloatInRange(0.6, 0.7)}
    )`,
    padding: "max(3vmin, 30px)",
    borderRadius: "25px",
    margin: "max(3vmin, 30px) 0 max(3vmin, 30px) 0",
    alignItems: align,
    justifyContent: align,
    textAlign: align,
  };

  return (
    <div style={{ ...cardStyles }}>
      <div className="card-title">
        <h3 style={{ display: "inline" }}>{props.name}.</h3>
        <p style={{ display: "inline-block", fontSize: "13px" }}>{props.date}</p>
      </div>
      {props.children}
    </div>
  );
}

function getFloatInRange(min, max) {
  return Math.random() * (max - min) + min;
}
