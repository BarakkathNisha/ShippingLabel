import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const ToDetails = ({ shipData, setShipData, navigation }) => {
  const { name, street, city, state, zip } = shipData.from;
  return (
    <Container maxWidth="xs">
      <h3>Receiver's Address</h3>
      <TextField
        label="Name"
        name="name"
        value={name}
        onChange={setShipData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
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
      />
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
    </Container>
  );
};
export default ToDetails;
