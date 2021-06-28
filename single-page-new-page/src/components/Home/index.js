import React from "react";
import MultiOknaScreen from "../FirstScreen";
import ContactScreen from "../ContactScreen";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HomeStyles";
import "./styles/Home.css";

import bg1 from "../FirstScreen/assets/img1.jpg"; //to do move to styles.js

function Home({ selected, classes, handleClick }) {
  return (
    <div className={classes.root}>
      <AwesomeSlider
        animation="openAnimation"
        selected={selected}
        onTransitionStart={(e) => handleClick(e, "sliderClick")}
        infinite={true}
        bullets={true}
        fillParent={true}
      >
        <div
          style={{ backgroundImage: `url("${bg1}")` }}
          className={classes.contentContainer}
          id="1"
        >
          <MultiOknaScreen />
        </div>
        <div id="2">2</div>
        <div id="3">3</div>
        <div id="4">4</div>
        <div id="5">5</div>
        <div id="6">
          <ContactScreen />
        </div>
      </AwesomeSlider>
    </div>
  );
}

export default withStyles(styles)(Home);
