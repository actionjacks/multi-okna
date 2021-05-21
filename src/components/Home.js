import React from "react";
import image from "../assets/pic1.jpg";
import Slider from "./slider/Slider";

import { withStyles } from "@material-ui/core/styles";

import styles from "../styles/HomeStyle";

function Home({ classes }) {
  return (
    <div>
      <Slider />
      <div className={classes.line}></div>
    </div>
  );
}

export default withStyles(styles)(Home);
