import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HomeStyles";
import "./styles/Home.css";

function Home({ selected, classes }) {
  return (
    <div className={classes.homeContainer}>
      <AwesomeSlider animation="openAnimation" selected={selected}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </AwesomeSlider>
    </div>
  );
}

export default withStyles(styles)(Home);
