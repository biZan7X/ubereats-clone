import { combineReducers } from "redux";

import cartReducer from "./Cart";
import restaurantReducers from "./restaurants";

const reducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducers,
});

const RootReducer = (state, action) => {
  return reducer(state, action);
};

export default RootReducer;
