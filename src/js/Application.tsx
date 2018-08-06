import * as React from "react";
import * as ReactDOM from "react-dom";
import Router from "./Routes/Router";

import "../css/bases/reset.css";

const root = document.getElementById("react");
if (root !== null) {
  ReactDOM.render(Router, root);
}
