import React, { Component } from "react";
import { connect } from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: ["business", "seree"]
    };
    console.log(this.state.product.length);
  }

  renderProduct() {
    return this.state.product.map((elem, i) => {
      return <div key={"productv-div-" + i}>{elem}</div>;
    });
  }

  render() {
    let product = [];
    this.state.product ? product : "";
    return <div>{this.renderProduct()}</div>;
  }
}

export default Products;
