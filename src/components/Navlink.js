const Navlink = (props) => {
  return (
    <a className="nav-link" href={"#" + props.name}>
      <span className={props.name}>{props.name}</span>
    </a>
  );
};

export default Navlink;
