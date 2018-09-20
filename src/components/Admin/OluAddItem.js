import React, { Component } from "react";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue: 0,
      option: [],
      optionValue: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    // this.createOptionPrice = this.createOptionPrice.bind(this)
  }
  inputChangeHandler(event) {
    const optionValue = this.state.optionValue;
    optionValue[event.target.id] = event.target.value;

    this.setState({ optionValue }, function() {
      console.log(this.state);
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createOptionPrice(x, category) {
    let optionPrice = [];

    if (category === "first") {
      for (let i = 0; i < x; i++) {
        optionPrice.push(
          <React.Fragment key={i}>
            <input placeholder="--" />
            <input
              placeholder="optionValue"
              onChange={this.inputChangeHandler}

              id={i}
              name="optionValue"
            />
            <br />
            <br />
            {/* <hr /> */}
          </React.Fragment>
        );
      }
    } else {
      x.forEach(i => {
        let k = Math.random();
        let j = k;
        let e = +i + k;
        console.log(j, e);
        for (j; j < e; j++) {
    
          optionPrice.push(
            <React.Fragment key={j}>
              <input placeholder="--" />
              <input placeholder="optionValue" />
              <br />
              <br />
              {/* <hr /> */}
            </React.Fragment>
          );
        }

        // }
      });
    }
    return optionPrice;
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <input
          name="itemValue"
          type="text"
          placeholder="itemValue"
          onChange={this.handleChange}
        />
        <hr />
        <br />
        <br />

        {this.state.itemValue !== 0 &&
          this.createOptionPrice(this.state.itemValue, "first")}
        {/* { this.} */}

        <hr />
        <hr />
        {Object.keys(this.state.optionValue).length !== 0 &&
          this.createOptionPrice(this.state.optionValue, "second")}
      </React.Fragment>
    );
  }
}

export default Admin;
