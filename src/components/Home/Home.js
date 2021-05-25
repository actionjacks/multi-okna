import React from "react";
import Slider from "./Slider";
import Footer from "../Footer";
import ProductBox from "./ProductBox";

import { withStyles } from "@material-ui/core/styles";

import styles from "../../styles/HomeStyle";
import Map from "./Map";

function Home({ classes }) {
  return (
    <div className={classes.home}>
      <Slider />
      <h2>Zobacz naszą ofertę</h2>
      <div className={classes.products}>
        <div className={classes.productLeft}>
          <ProductBox fullHeight name="Okna" />
        </div>
        <div className={classes.productRight}>
          <ProductBox name="Okna" />
          <ProductBox name="Okna" />
          <ProductBox name="Okna" />
          <ProductBox name="Okna" />
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Home);
