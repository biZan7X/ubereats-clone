//& REDUX
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//& SAGA
import createSagaMiddleware from "@redux-saga/core";

import reducers from "../reducers";
import middlewares from "../saga";

const sagaMiddlewares = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddlewares))
);

sagaMiddlewares.run(middlewares);
