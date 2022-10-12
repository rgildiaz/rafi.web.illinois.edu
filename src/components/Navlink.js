const Navlink = (props) => {
  return (
    <a
      className="nav-link"
      href={props.overrideLink ? props.overrideLink : "#" + props.name}
      target={props.overrideLink ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <span className={props.name}>{props.name}</span>
    </a>
  );
};

export default Navlink;
