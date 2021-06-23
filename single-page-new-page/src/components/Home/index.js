import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HomeStyles";
import "./styles/Home.css";

function Home({ selected, classes, handleClick }) {
  return (
    <div className={classes.root}>
      <AwesomeSlider
        animation="fallAnimation"
        selected={selected}
        onTransitionStart={(e) => handleClick(e, "sliderClick")}
        infinite={true}
      >
        <div id="1">1</div>
        <div id="2">2</div>
        <div id="3">3</div>
        <div id="4">4</div>
        <div id="5">5</div>
      </AwesomeSlider>
    </div>
  );
}

export default withStyles(styles)(Home);
