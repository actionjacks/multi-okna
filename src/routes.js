import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function routes() {
  return (
    <Router>
      <div
        style={{
          marginTop: "120px",
          width: "100%",
        }}
      >
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default routes;
