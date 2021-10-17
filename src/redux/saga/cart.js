import { put, takeEvery, all, select, call } from "@redux-saga/core/effects";
import { Alert } from "react-native";

import { emptyCart, placeOrder } from "../actions";

import { db, timeStamp } from "../../firebase";

import NavigationActions from "../../navigation/NavigationActions";

function* fetchPlaceOrder(action) {
  const { cartItems, restaurantName, bill } = action.payload;

  try {
    db.collection("Orders").add({
      items: cartItems,
      bill: bill,
      restaurantName: restaurantName,
      orderedAt: timeStamp(),
    });

    yield put(emptyCart());
    NavigationActions.navigate("OrderCompleted", {
      orderedItems: cartItems,
      restaurantName: restaurantName,
      bill: bill,
    });
  } catch (err) {
    Alert.alert("Oops", "Something went wrong, please try again later");
  }
}

function* fetchPlaceOrderFork() {
  yield takeEvery(placeOrder().type, fetchPlaceOrder);
}

export default function* () {
  yield all([fetchPlaceOrderFork()]);
}
