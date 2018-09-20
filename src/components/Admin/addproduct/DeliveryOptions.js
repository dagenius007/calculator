import React, { Component } from "react";
import { connect } from 'react-redux';


class DeliveryOptions extends Component {
  constructor(props) {
    super(props);

    // for (let iota = 0; iota < props.producttypes; iota++) {
    //   products[iota] = "product " + iota;
    // }
    // console.log(props);

    this.state = {
      quantity: 0,
      noproducttypes: 0,
      products: [],
      quantities: [],
      productvalues: []
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
    }
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

  handleSubmit(e){
    e.preventDefault();
    this.props.addProduct(this.state.products , this.state.quantities , this.state.productvalues);
  }

  renderProductTypes() {
    // console.log("Products", this.state.products);

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
    // console.log("Quantity", this.state.quantities);
    // console.log("Product values", this.state.productvalues);

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

  renderProductValue(){
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
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="storepickup" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addProduct: (products , quantities , productvalues) => dispatch(addProduct(products , quantities , productvalues))
//   } 
//  }
export default DeliveryOptions;
//  export default connect(null, mapDispatchToProps)(ProductOptions);
