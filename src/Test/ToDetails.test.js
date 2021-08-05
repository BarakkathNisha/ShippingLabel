import React from "react";
import ReactDOM from "react-dom";
import ToDetails from "../Component/ToDetails";

it("component render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ToDetails />, div);
});
