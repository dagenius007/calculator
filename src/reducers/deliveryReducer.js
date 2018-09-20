import * as t from "../actions/types";

const deliveryReducer = (state = {} , action) => {
  switch (action.type) {
    case t.FETCH_DELIVERY:
    return Object.assign({}, action.payload);
    default:
      return state;
  }
};
export default deliveryReducer;
