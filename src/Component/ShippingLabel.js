import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import FromDetails from "./FromDetails";
import ToDetails from "./ToDetails";
import ReviewDetails from "./ReviewDetails";
import Confirmation from "./Confirmation";
import ShippingMethod from "./ShippingMethod";

const shippingData = {
  from: {
    name: "John Smith",
    street: "131 Dartmouth St",
    city: "Boston",
    state: "MA",
    zip: "02116"
  },
  to: {
    name: "Linda Jackson",
    street: "40 Fulton St",
    city: "New York",
    state: "NY",
    zip: "10038"
  },
  weight: 2,
  shippingOption: 1
};
const steps = [
  { id: "sender" },
  { id: "receiver" },
  { id: "shippingmethod" },
  { id: "review" },
  { id: "confirm" }
];
function ShippingLabel() {
  const [shipData, setShipData] = useForm(shippingData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const props = { shipData, setShipData, navigation };
  switch (id) {
    case "sender":
      return <FromDetails {...props} />;
    case "receiver":
      return <ToDetails {...props} />;
    case "shippingmethod":
      return <ShippingMethod {...props} />;
    case "review":
      return <ReviewDetails {...props} />;
    case "confirm":
      return <Confirmation {...props} />;
    default:
      return null;
  }
}
export default ShippingLabel;
