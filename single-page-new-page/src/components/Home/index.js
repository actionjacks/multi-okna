import React from "react";
//screens
import MultiOknaScreen from "../FirstScreen";
import SecondScreenStyles from "../SecondScreen";
import ContactScreen from "../ContactScreen";
import DisabledTabs from "../ThirdScreen";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HomeStyles";
import "./styles/Home.css";

function Home({ selected, classes, handleClick }) {
  return (
    <div className={classes.root}>
      <AwesomeSlider
        animation="cubeAnimation"
        selected={selected}
        onTransitionStart={(e) => handleClick(e, "sliderClick")}
        infinite={true}
        bullets={true}
        fillParent={true}
      >
        <div className={classes.contentContainer} id="1">
          <MultiOknaScreen />
        </div>
        <div id="2">
          <SecondScreenStyles />
        </div>
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
