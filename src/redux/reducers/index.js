import { combineReducers } from "redux";
import cartReducer from "./Cart";

const reducer = combineReducers({
  cart: cartReducer,
});

const RootReducer = (state, action) => {
  return reducer(state, action);
};

export default RootReducer;
