import React, { Component } from "react";
import database from "../firebase";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      items: {}
    };
  }

  componentWillMount() {
    const itemsRef = database.ref("item");
    itemsRef.on(
      "value",
      function(snapshot) {
        let items = snapshot.val();
        this.setState({
          items: items
        });
      }.bind(this)
    );
  }

  // submit(event) {
  //   let calc = parseInt(event.target.value, 10);

  //   if (calc > 10 || calc === 0) {
  //     this.setState({ calc: this.state.calc + calc });
  //     // console.log(this.state.calc);
  //   } else {
  //     this.setState({ calc: this.state.calc * calc });
  //     // console.log(this.state.calc);
  //   }
  // }

  // renderItem(value) {
  //   return Object.keys(value).map((item, i) => (
  //     <option value={i}>{value[item]}</option>
  //   ));
  // }

  renderOption() {
    //Create empty array
    let output = [];
    //Check if object is empty
    if (Object.keys(this.state.items).length > 0) {
      //Get object values
      let values = Object.assign(this.state.items);
      //Loop through values
      for (let value in values) {
        let items = Object.assign(values[value]);
        // Get object keys
        for (let item in items) {
          let entries = Object.entries(items[item]);
          // Push into array
          output.push(
            <div key={item}>
              <p>{item}</p>
              <select>
                {entries.map((entry, i) => {
                  return (
                    <option key={i} value={entry[1]}>
                      {entry[0]}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        }
      }
    }
    return output;
  }

  renderDelivery(){

  }

  render() {
    return (
      <div>
        <form>{this.renderOption()}</form>
      </div>
    );
  }
}

export default Calculator;
