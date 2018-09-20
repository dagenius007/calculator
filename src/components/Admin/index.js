import React, { Component } from "react";
// import Options from "./Options";
import database from "../firebase";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      items: []
    };
  }

  submit(event) {
    let calc = parseInt(event.target.value, 10);

    if (calc > 10 || calc === 0) {
      this.setState({ calc: this.state.calc + calc });
      // console.log(this.state.calc);
    } else {
      this.setState({ calc: this.state.calc * calc });
      // console.log(this.state.calc);
    }
  }

  render() {
    return (
      <div>
        <form>
          <select>{this.renderSelect()}</select>
        </form>
      </div>
    );
  }
}

export default Admin;
