import React from "react";
import Slider from "./Slider";
import Footer from "../Footer";

import { withStyles } from "@material-ui/core/styles";

import styles from "../../styles/HomeStyle";
import Map from "./Map";

function Home({ classes }) {
  return (
    <div className={classes.home}>
      <Slider />
      <div className={classes.line}></div>
      <Map />
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Home);
