import React from "react";

import { Route, Switch } from "react-router-dom";

function routes() {
  return (
    <Switch>
      <Route exact path="/">
        <p>HOME ROUTE</p>
      </Route>
    </Switch>
  );
}

export default routes;
