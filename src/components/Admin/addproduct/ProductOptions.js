import React, { Component } from "react";
import { connect } from "react-redux";
import PriceFactor from "./PriceFactor";
import { addProduct } from "../../../actions/addAction";

class ProductOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      quantity: 0,
      noproducttypes: 0,
      products: [],
      quantities: [],
      productvalues: [],
      items: [],
      optionnumber: [],
      options: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleProductTypes = this.handleProductTypes.bind(this);
    this.handleQuantities = this.handleQuantities.bind(this);
    this.handleProductValues = this.handleProductValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === "noproducttypes") {
      let val = +e.target.value;
      let productval = +e.target.value * this.state.quantity;

      this.setState({
        products: Array(val).fill(null),
        productvalues: Array(productval).fill(null)
      });
    } else if (e.target.name === "quantity") {
      let val = +e.target.value;
      this.setState({
        quantities: Array(val).fill(null)
      });
    } else if (e.target.name === "itemsno") {
      let val = +e.target.value;
      this.setState({
        items: Array(val).fill(null),
        optionnumber: Array(val).fill(null)
      });
    }
  }

  handleNoOptions(evt, id) {
    let val = +evt.target.value;
    id = +evt.target.id;

    this.setState({
      id: +evt.target.id
    });

    let optionno = this.state.optionnumber;
    optionno[id] = val;
    this.setState((prevState) => { return optionnumber : optionno });


    // console.log(this.state.optionnumber);

  }

  handleProductTypes(evt, idx) {
    let val = evt.target.value;
    let products = this.state.products;
    products[idx] = val;
    this.setState({ products: products });
  }

  handleQuantities(evt, i) {
    let val = evt.target.value;
    let quantities = this.state.quantities;
    quantities[i] = val;
    this.setState({ quantities: quantities });
  }

  handleProductValues(evt, idx) {
    let val = evt.target.value;
    let productvalues = this.state.productvalues;
    productvalues[idx] = val;
    this.setState({ productvalues: productvalues });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.items);
    // this.props.addProduct(
    //   this.state.products,
    //   this.state.quantities,
    //   this.state.productvalues
    // );
  }

  renderProductTypes() {
    return this.state.products.map((elm, idx) => {
      return (
        <div key={"product-div-" + idx}>
          <input
            key={idx}
            name={"product" + idx}
            type="text"
            placeholder="Name of products {idx}"
            onChange={e => this.handleProductTypes(e, idx)}
          />
        </div>
      );
    });
  }

  renderQuantity() {
    return this.state.quantities.map((elm, idx) => {
      return (
        <div key={"product-div-" + idx}>
          <input
            key={idx}
            name={"quantity" + idx}
            type="text"
            placeholder="Name of Quantity"
            onChange={e => this.handleQuantities(e, idx)}
          />
        </div>
      );
    });
  }

  renderProductValue() {
    return this.state.productvalues.map((elem, i) => {
      return (
        <div key={"productv-div-" + i}>
          <input
            key={i}
            name={"product" + i}
            type="text"
            placeholder="Name of Product"
            onChange={e => this.handleProductValues(e, i)}
          />
        </div>
      );
    });
  }

  renderPriceFactor(idx) {
    return (
      <PriceFactor
        id={this.state.id}
        items={this.state.items}
        options={this.state.options}
        handleChange={this.handleChange}
        handleNoOptions={e => this.handleNoOptions(e, idx)}
      />
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <input
            name="quantity"
            type="number"
            placeholder="Number of Quantities"
            onChange={this.handleChange}
          />

          <input
            name="noproducttypes"
            type="number"
            placeholder="Number of Product types"
            onChange={this.handleChange}
          />


          {this.renderProductTypes()}
          {this.renderQuantity()}
          {this.renderProductValue()} */}
          {this.renderPriceFactor(this.state.id)}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (products, quantities, productvalues) =>
      dispatch(addProduct(products, quantities, productvalues))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductOptions);
