import React, { Component } from "react";


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      items: []
    };

    this.handleNumber = this.handleNumber.bind(this);
  }

  handleNumber(e) {
    let number = parseInt(e.target.value);
    console.log(number);
  }

  renderInput() {
      return <input />
  }
  renderQuantity(){
      
  }

  render() {
    return ();
  }
}

export default Admin;
