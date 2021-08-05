import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const shippingMethods = {
  ground: 1,
  priority: 2
};
const ShippingMethod = ({ shipData, setShipData, navigation }) => {
  const { shippingOption } = shipData;

  const [value, setValue] = useState(shippingOption);

  const handleChange = (e) => {
    console.log(value);
    setValue(e.target.value);
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">ShippingOption</FormLabel>
        <RadioGroup
          aria-label="shippingoption"
          name="shippingoption"
          onChange={handleChange}
          value={value}
        >
          {Object.entries(shippingMethods).map(([name, rvalue]) => {
            return (
              <FormControlLabel
                label={name}
                name={name}
                value={rvalue}
                control={<Radio />}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <div style={{ marginTop: "1rem" }}>
        <Button variant="contained" onClick={() => navigation.previous()}>
          Prev
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
          style={{ marginLeft: "1rem" }}
        >
          Next
        </Button>
      </div>
    </>
  );
};
export default ShippingMethod;
