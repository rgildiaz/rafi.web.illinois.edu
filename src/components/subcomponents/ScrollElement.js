import React from "react";
const caretRef = React.createRef();

export default function CaretDown(props) {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const caretHeight = caretRef.current.clientHeight + 400;
    const range = 200;
    const offset = caretHeight / 2;
    let scroll = 0;

    const didScrollPage = () => {
      // The arrow disappears after scrolled past
      scroll = window.scrollY > scroll ? window.scrollY : scroll;
      let calc = 1 - (scroll - offset + range) / range;

      if (calc > 0.8) {
        calc = 0.8;
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
    <div
      ref={caretRef}
      style={{
        opacity: opacity,
        position: "absolute",
        bottom: "20px",
        color: "gray",
      }}
    >
      <a href="#main-content">&#9660;</a>
    </div>
  );
}
