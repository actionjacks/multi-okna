import React from "react";
import Home from "./screens/Home";
import TopBaner from "./components/TopBaner";

import { Route, Switch } from "react-router-dom";

function routes({ data }) {
  return (
    <Switch>
      <Route exact path="/">
        {data && (
          <>
            <TopBaner homeSlogan={data[0].homeSlogan} />
            <Home data={data} />
          </>
        )}
      </Route>
    </Switch>
  );
}

export default routes;
