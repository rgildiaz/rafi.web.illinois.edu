const Navlink = (props) => {
  let [link, target] = props.overrideLink
    ? [props.overrideLink, "_blank"]
    : ["#" + props.name, "_self"];

  return (
    <a className="nav-link" href={link} target={target} rel="noreferrer">
      <span className={props.name}>{props.name}</span>
    </a>
  );
};

export default Navlink;
