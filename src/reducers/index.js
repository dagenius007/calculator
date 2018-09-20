import {combineReducers} from "redux";
import addReducer from "./addReducer";
import deliveryReducer from "./deliveryReducer";

export default combineReducers({
    addReducer,
    delivery : deliveryReducer
})