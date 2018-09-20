import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDelivery , updateDelivery } from "../../../actions/deliveryAction";
import deliveryReducer from "../../../reducers/deliveryReducer";
// import * as actions from '../../../actions';

class DeliveryOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //   deliveryoptions: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchDelivery();
  }

  handleChange(e) {
    let delivery = this.state.deliveryoptions;
    delivery[e.target.name] = e.target.value;
    this.setState({
      deliveryoptions: delivery
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.deliveryoptions);
    this.props.updateDelivery(this.state.deliveryoptions);
  }

  renderDeliveryOption() {
   const {deliveryoptions} = this.props;

    if (Object.keys(deliveryoptions).length > 0) {
      let deliveries = Object.assign(this.props.deliveryoptions);
      return Object.keys(deliveries).map((item, i) => {
        let values = deliveries[item];
        return Object.keys(values).map((item, i) => {
          console.log(values[item]);
          let location = item.split("_");
          return (
            <div key={i}>
              <p>{location.join(" ")}</p>
              <input value={values[item]} name={item} onChange={this.handleChange}/>
            </div>
          );
        });
      });
    }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderDeliveryOption()}
          <button>Update</button>
        </form>
      </div>
    );
  }
}
// Actions To Props
const mapDispatchToProps = dispatch => {
  return {
    updateDelivery: deliveryoptions => dispatch(updateDelivery(deliveryoptions)),
    fetchDelivery: () => dispatch(fetchDelivery())
  };
};

// Strore Reducer to props 
const mapStateToProps = state => {
  return { deliveryoptions: state.delivery };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryOption);

