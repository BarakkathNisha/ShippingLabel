import React from "react";
import ReactDOM from "react-dom";
import ShippingLabel from "../Component/ShippingLabel";

it("component render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ShippingLabel />, div);
});
