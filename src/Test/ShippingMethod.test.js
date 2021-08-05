import React from "react";
import ReactDOM from "react-dom";
import ShippingMethod from "../Component/ShippingMethod";

it("component render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ShippingMethod />, div);
});
