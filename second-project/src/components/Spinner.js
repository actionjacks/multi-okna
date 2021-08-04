import React from "react";

import styled from "styled-components";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <SpinnerContainer>
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </SpinnerContainer>
  );
}

export default Loader;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
