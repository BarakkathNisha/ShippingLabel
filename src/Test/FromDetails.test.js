import React from "react";
import ReactDOM from "react-dom";
import FormDetails from "../Component/FromDetails";

it("component render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormDetails />, div);
});
