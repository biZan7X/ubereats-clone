import { put, takeEvery, all, select, call } from "@redux-saga/core/effects";

import {
  getRestaurantData,
  setRestaurantData,
  setRefreshing,
} from "../actions";

import config from "../../../config";

function* fetchRestaurants() {
  const { city, activeTab } = yield select((state) => state.restaurant);
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${config.YELP_API_KEY}`,
    },
  };

  yield put(setRefreshing(true));
  try {
    const res = yield fetch(yelpUrl, apiOptions);
    const data = yield res.json();
    yield put(
      setRestaurantData(
        data.businesses.filter((item) =>
          item.transactions.includes(activeTab.toLowerCase())
        )
      )
    );

    yield put(setRefreshing(false));
  } catch (err) {
    console.log("Failed to fetch data from yelp:", err);
  }
  yield put(setRefreshing(false));
}

function* fetchRestaurantsFork() {
  yield takeEvery("GETRESTAURANTDATA", fetchRestaurants);
}

export default function* () {
  yield all([fetchRestaurantsFork()]);
}
