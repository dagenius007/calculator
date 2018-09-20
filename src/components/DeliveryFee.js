import React, { Component } from "react";
import database from "../firebase";

class DeliveryFee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryfee: {}
    };
  }
  componentWillMount() {
    const locationRef = database.ref("locations");
    locationRef.on(
      "value",
      function(snapshot) {
        let deliveryoptions = snapshot.val();
        this.setState({
          deliveryoptions: deliveryoptions
        });
        console.log(this.state.deliveryoptions);
      }.bind(this)
    );
  }

  renderDeliveryOption() {
    let output = [];
    if (Object.keys(this.state.deliveryoptions).length > 0) {
      let deliveries = Object.assign(this.state.deliveryoptions);
      return Object.keys(deliveries).map((item, i) => {
        let values = deliveries[item];
        return Object.keys(values).map((item, i) => {
          console.log(values[item]);
          let location = item.split("_");
          return (
            <div key={i}>
              <p>{location.join(" ")}</p>
              <input value={values[item]} name={item} />
            </div>
          );
        });
      });
    }
  }

  render() {
    return (
      <div>
        <form>{this.renderOption()}</form>
      </div>
    );
  }
}

export default DeliveryFee;
