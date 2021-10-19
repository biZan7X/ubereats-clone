import { put, takeEvery, all, select, call } from "@redux-saga/core/effects";
import { Alert } from "react-native";

import { emptyCart, placeOrder, setIsOrderLoading } from "../actions";

import apiCall from "../../utils/apiCall";

import NavigationActions from "../../navigation/NavigationActions";

const url = "http://localhost:3000/api/orders/";

function* fetchPlaceOrder(action) {
  const { cartItems, restaurantName, bill } = action.payload;

  try {
    yield put(setIsOrderLoading(true));
    yield call(apiCall, url, "POST", {
      items: cartItems,
      bill: bill,
      restaurantName: restaurantName,
      orderedAt: "17:00",
    });

    yield put(setIsOrderLoading(false));
    yield put(emptyCart());

    yield call(NavigationActions.navigate, "OrderCompleted", {
      orderedItems: cartItems,
      restaurantName: restaurantName,
      bill: bill,
    });
  } catch (err) {
    Alert.alert("Oops", "Something went wrong, please try again later");
    console.log(err);
  }
}

function* fetchPlaceOrderFork() {
  yield takeEvery(placeOrder().type, fetchPlaceOrder);
}

export default function* () {
  yield all([fetchPlaceOrderFork()]);
}
