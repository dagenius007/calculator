import database from "../firebase";
import { FETCH_DELIVERY } from "./types";

export const fetchDelivery = () => (dispatch, getState) => {
  const locationRef = database.ref("locations");
  
locationRef.on("value", function(snapshot) {
    dispatch({
      type: FETCH_DELIVERY,
      payload: snapshot.val()
    });
  });
};

export const updateDelivery = deliveryOptions => (dispatch, getState) => {
  return database
    .ref(`locations`)
    .push(deliveryOptions)
    .then(() => {
      dispatch({
        type: "ADD_ACTION"
      });
      console.log("Data is saved!");
    })
    .catch(e => {
      console.log("Failed.", e);
    });
};
