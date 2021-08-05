import Button from "@material-ui/core/Button";
const ReviewDetails = ({ setForm, shipData, navigation }) => {
  const { to, from, shippingOption, weight } = shipData;
  const shippingRate = 0.4;
  const shippingCost =
    weight * shippingRate * (shippingOption === "ground" ? 1 : 1.5);
  const { go } = navigation;

  return (
    <div className="form">
      <h2>Order Review</h2>

      <h3>Sender Address</h3>
      <div>{from.name}</div>
      <div>{from.street}</div>
      <div>{from.city}</div>
      <div>{from.state}</div>
      <div>{from.zipcode}</div>

      <h3>Receiver Address</h3>
      <div>{to.name}</div>
      <div>{to.street}</div>
      <div>{to.city}</div>
      <div>{to.state}</div>
      <div>{to.zipcode}</div>

      <h3>Shipping Method</h3>
      <div>{shippingOption}</div>
      <h3>Weight</h3>
      <div>{weight}</div>
      <h3>Shipping Cost</h3>

      <div> {shippingCost}</div>
      <br />
      <br />
      <div className="navigation">
        <Button
          onClick={() => go("confirm")}
          color="primary"
          variant="contained"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ReviewDetails;
