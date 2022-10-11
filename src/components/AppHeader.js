import React from "react";
import CaretDown from "./ScrollElement";
import MyName from "./MyName.js";

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

export default function AppHeader(props) {
  return (
    <header className="App-header" style={{ ...headerStyles }}>
      <h1>
        Hi, I'm <MyName />.
      </h1>
      <CaretDown style={{ ...caretStyles }}></CaretDown>
    </header>
  );
}
