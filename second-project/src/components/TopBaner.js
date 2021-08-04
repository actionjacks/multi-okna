import React from "react";
import colors from "../root-styles/Colors";
import img from "./../assets/img3_.webp";

function TopBaner() {
  return (
    <div
      style={{
        opacity: ".9",
        background: `url(${img}) no-repeat center top`,
        backgroundSize: "cover",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        minHeight: "730px",
        zIndex: "-1",
        borderBottom: `solid 5px ${colors.mainBlue}`,
      }}
    ></div>
  );
}

export default TopBaner;
