import React, { Component } from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import ProductOptions from "./ProductOptions";

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity : ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  // componentDidMount() {
  //   this.state.producttypes.length = Array(this.state.producttypes).fill(null);
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          


        </form>
      </div>
    );
  }
}

export default Quantity;
