import React, { Component } from "react";
import { connect } from "react-redux";
import { addItems } from "../../../actions/addAction";

class AddItems extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      itemValue: 0,
      optionValue: 0,
      items: [],
      option: [],
      pricefactor: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleOptionInput = this.handleOptionValue.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Add items to items Array
  handleItems(e, i) {
    let val = e.target.value;
    let items = this.state.items;
    items[i] = val;
  }
  // Handle Option Value
  handleOption(e) {
    this.setState({ id: +e.target.id });

    //Create empty array
    this.state.option[+e.target.id] = Array(+e.target.value).fill(null);
    this.state.pricefactor[+e.target.id] = Array(+e.target.value).fill(null);
  }

  handleOptionInput(e, i, j) {
    //Get values and option
    let val = e.target.value;

    let option = this.state.option[j];

    //Set values into option array
    option[i] = val;
    console.log(this.state.option);
  }

  handlePricefactor(e, i, j) {
    let val = e.target.value;
    let pricefactor = this.state.pricefactor[j];

    //Set values into pricefactor array
    pricefactor[i] = val;
    console.log(this.state.pricefactor);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItems(
      this.state.items,
      this.state.option,
      this.state.pricefactor
    );
  }

  createInputs() {
    let ItemInputs = [];
    for (let i = 0; i < this.state.itemValue; i++) {
      ItemInputs.push(
        <div key={i}>
          <input
            placeholder="Item name"
            onChange={e => this.handleItems(e, i)}
            name="optionValue"
          />
          <input
            placeholder="Option Value"
            onChange={this.handleOption}
            id={i}
            name="optionValue"
          />
          <br />
        </div>
      );
    }
    return ItemInputs;
  }

  loopOptions() {
    let self = this;
    return this.state.option.map(function(elem, j) {
      return elem.map(function(elem, i) {
        return (
          <div key={i}>
            <input
              type="text"
              name={"option" + i}
              placeholder="option Name"
              onChange={e => self.handleOptionInput(e, i, j)}
            />
            <input
              placeholder="Price Factor"
              onChange={e => self.handlePricefactor(e, i, j)}
            />
          </div>
        );
      });
    });
  }

  render() {
    return (
      <div>
        <input
          name="itemValue"
          placeholder="Number of Item"
          onChange={this.handleChange}
        />
        <hr />
        <form onSubmit={this.handleSubmit}>
          {this.state.itemValue !== 0 && this.createInputs()}
          {this.loopOptions(this.state.id)}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItems: (items, option, pricefactor) =>
      dispatch(addItems(items, option, pricefactor))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddItems);
