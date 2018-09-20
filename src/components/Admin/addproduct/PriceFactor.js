import React, { Component } from "react";
import { connect } from "react-redux";

class PriceFactor extends Component {
  // Constructor for PriceFacotr
  constructor(props) {
    super(props);

    this.state = {
      itemsno: 0,
      options: []
    };
  }

  handleItems(evt, idx) {
    let val = evt.target.value;
    let items = this.props.items;
    items[idx] = val;
  }

  renderItems() {
    return this.props.items.map((elm, idx) => {
      return (
        <div key={"item-div-" + idx}>
          <input
            // key={idx}
            name={"item" + idx}
            type="text"
            placeholder="Name of Item"
            onChange={e => this.handleItems(e, idx)}
          />
          <input
            // key={idx}
            name={"nooption" + idx}
            type="number"
            id={idx}
            placeholder="Number of Option"
            onChange={e => this.props.handleNoOptions(e, idx)}
          />
          {this.renderOptionQty()}
        </div>
      );
    });
  }

  checkId(id) {
    console.log(id, this.props.id);
    if (id == this.props.id) return this.renderOptionQty();
  }

  renderOptionQty() {
    return this.props.options.map((elem, i) => {
      return (
        <div key={"options-div-" + i}>
          <input
            // key={i}
            name={"options" + i}
            type="text"
            placeholder="Name of Option"
            // onChange={e => this.handleOptionValue(e, i)}
          />
          <input
            // key={i}
            name={"product" + i}
            type="text"
            placeholder="Price factor"
            // onChange={e => this.handlePriceFactor(e, i)}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <input
          type="number"
          placeholder="Number of items"
          name="itemsno"
          onChange={this.props.handleChange}
        />

        {this.renderItems()}

        {/* </form> */}
      </div>
    );
  }
}

export default PriceFactor;
