import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { routerReducer } from "react-router-redux";

import Router from "./routes/Router";
import reducers from "./reducers/index";

import "../css/bases/reset.css";
import handleError from "./errors/ErrorHandler";

window.onerror = handleError;
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

const root = document.getElementById("react");
if (root !== null) {
  ReactDOM.render(<Provider store={store}>{Router}</Provider>, root);
}
