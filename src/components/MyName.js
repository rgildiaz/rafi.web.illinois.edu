import styles from "../styles/styles.json";

const em = styles["em"];
const numShades = 3;

export default function MyName(props) {
  return (
    <span>
      {/* define the shadow animation */}
      <style>{makeAnimation()}</style>
      <span style={{ animation: "0.5s menuHover forwards" }}>
        Rafi
      </span>
    </span>
  );
}

const makeAnimation = () => {
  let colorArray = [];
  let scale = 10;

  // em is an array of all the theme colors
  // color is an array of the r, g, or b value of each color
  em.forEach((color) => {
    let thisColor = [];
    for (let i = 0; i < numShades; i++) {
      let newShade = [];
      color.forEach((c) => {
        newShade.push(c - i * scale);
      });
      thisColor.push(newShade);
    }
    colorArray.push(thisColor);
  });

  return `
    @keyframes shadow-color {
        ${formatCSS(colorArray)}
      }
  `;
};

const formatCSS = (colorArray) => {
  let outString = "";
  let count = 0;

  colorArray.forEach((color) => {
    let shadowText = "text-shadow: ";

    for (let i = 0; i < color.length; i++) {
      let shade = color[i];

      // the keyframe percent
      let percent = Math.round((100 / (numShades * colorArray.length)) * count);

      shadowText +=
        `${10 * (i + 1)}px ${10 * (i + 1)}px rgb(${shade[0]}, ${shade[1]}, ${
          shade[2]
        })` + (i === color.length - 1 ? "" : ", ");
      outString += `\n${percent}% {${shadowText}}`;
      count++;
    }
  });

  outString += "100% {text-shadow: none}";
  return outString;
};
