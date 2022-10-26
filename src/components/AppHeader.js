import React from "react";
import CaretDown from "./subcomponents/ScrollElement";

const headerStyles = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
};

const caretStyles = {
  position: "absolute",
  bottom: "0px",
};

const nameStyles = {
  color: "white",
};

export default function AppHeader(props) {
  return (
    <header className="App-header" style={{ ...headerStyles }}>
      <h1 style={{ margin: "0" }}>
        Hi, I'm{" "}
        <span className="em" style={{ ...nameStyles }}>
          Rafi
        </span>
        .
      </h1>
      <CaretDown style={{ ...caretStyles }}></CaretDown>
    </header>
  );
}
