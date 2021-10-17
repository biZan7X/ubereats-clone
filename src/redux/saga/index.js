import { all } from "@redux-saga/core/effects";

import restaurant from "./restaurant";

export default function* () {
  yield all([restaurant()]);
}
