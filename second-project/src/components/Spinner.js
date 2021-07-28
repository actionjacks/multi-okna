import React from "react";
import { Spinner } from "react-bootstrap";
import logo from "../assets/logo.webp";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </div>
  );
}

export default Loader;
