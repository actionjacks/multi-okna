import React, { useState, useEffect } from "react";

import colors from "../root-styles/Colors";
import arrowIcon from "../assets/scroll-arrow.png";

function ScrollBtn() {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <a
      href="#-root"
      style={{
        position: "fixed",
        bottom: "100px",
        right: "70px",
        opacity: showIcon ? "1" : "0",
        transition: "opacity .8s",
        background: `${colors.mainBlue} url(${arrowIcon}) no-repeat center center`,
        zIndex: "90",
        width: "60px",
        height: "60px",
        borderRadius: "100%",
        cursor: "pointer",
      }}
    ></a>
  );
}

export default ScrollBtn;
