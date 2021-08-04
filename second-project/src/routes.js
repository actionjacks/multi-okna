import React from "react";
import Home from "./screens/Home";

import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

function routes({ data }) {
  return (
    <Switch>
      <Route exact path="/">
        {data && (
          <HomeSlogan data-aos="fade-left">{data[0].homeSlogan}</HomeSlogan>
        )}
        <Home data={data} />
      </Route>
    </Switch>
  );
}

export default routes;

const HomeSlogan = styled.h1`
  padding: 1rem;
  text-align: right;
  font-size: 106px;
  text-transform: uppercase;
  line-height: 90px;
  color: rgb(89, 177, 191);
`;
