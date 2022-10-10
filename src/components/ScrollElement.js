import React from "react";
const caretRef = React.createRef();

export default function CaretDown(props) {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const caretHeight = caretRef.current.clientHeight + 200;
    const range = 200;
    const offset = caretHeight / 2;

    const didScrollPage = (e) => {
      let calc = 1 - (window.scrollY - offset + range) / range;

      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  return (
    <div ref={caretRef} style={{ opacity: opacity, position: "absolute", bottom: "20px", color: "gray" }}>&#9660;</div>
  );
}
