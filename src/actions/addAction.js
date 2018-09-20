import database from "../firebase";

export const addProduct = (products, quantity, productvalues) => (
  dispatch,
  getState
) => {
  let message = {};

  quantity.forEach(function(quantity, qid) {
    message[qid] = { quantity: quantity };
    let startpoint = qid * products.length;
    let endpoint = (qid + 1) * products.length;
    let arr = productvalues.slice(startpoint, endpoint);
    products.forEach(function(product, pid) {
      message[qid][product] = arr[pid];
    });
  });

  console.log(message);

  return database
    .ref(`items`)
    .push(message)
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

export const addItems = (items, option, pricefactor) => (
  dispatch,
  getState
) => {
  let item = {};
  //Get values from items using reducer
  item = items.reduce(function(acc, val, idx) {
    acc[val] = option[idx].reduce(function(obj, opt, iota) {
      obj[opt] = pricefactor[idx][iota];
      return obj;
    }, {});
    return acc;
  }, {});

  return database
    .ref(`item`)
    .push(item)
    .then(() => {
      // dispatch({
      //   type: "ADD_ACTION"
      // });
      console.log("Data is saved!");
    })
    .catch(e => {
      console.log("Failed.", e);
    });
};

export const updateDelivery = (deliveryOptions) => (
  dispatch,
  getState
) => {
  return database
    .ref(`locations`)
    .push(deliveryOptions)
    .then(() => {
      // dispatch({
      //   type: "ADD_ACTION"
      // });
      console.log("Data is saved!");
    })
    .catch(e => {
      console.log("Failed.", e);
    });
};
