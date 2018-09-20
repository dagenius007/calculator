// import * as t from "../actions/types";

let InitialState = {};

const addreducer = (state = InitialState, action) => {
  switch (action.type) {
    // case 'SIMPLE_ACTION':
    //     return { ...state, isCreated : false};
    // case t.SIGNUP_SUCCESS:
    //     return { ...state, isCreated : true , isLoggedIn : true};
    default:
      return state;
  }
};
export default addreducer;
