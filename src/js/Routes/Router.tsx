import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "../Components/Pages/ErrorPage";
import IndexPage from "../Components/Pages/IndexPage";

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default router;
