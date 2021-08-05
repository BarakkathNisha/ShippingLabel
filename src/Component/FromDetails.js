import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const FromDetails = ({ shipData, setShipData, navigation }) => {
  const { name, street, city, state, zip } = shipData.from;
  const helperText = "All Fields Required";
  return (
    <Container maxWidth="xs">
      <h3>Sender Address</h3>
      <p>* {helperText}</p>
      <TextField
        label="Name"
        name="name"
        value={name}
        onChange={setShipData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={name ? false : true}
      />
      <TextField
        label="Street"
        name="street"
        value={street}
        onChange={setShipData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={street ? false : true}
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setShipData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={city ? false : true}
      />
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={setShipData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={state ? false : true}
      />
      <TextField
        label="Zip"
        name="zip"
        type="number"
        value={zip}
        onChange={setShipData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={zip ? false : true}
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
export default FromDetails;
