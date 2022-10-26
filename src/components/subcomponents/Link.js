export default function Link(props) {
    return (
        <a
          href={props.href}
          target="_blank"
          rel="noreferrer"
        >
          {props.children}
        </a>
    )
}