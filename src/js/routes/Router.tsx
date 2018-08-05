import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage";
import IndexPage from "../components/pages/IndexPage";

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default router;
