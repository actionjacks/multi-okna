import React from "react";
import Slider from "./Slider";
import ProductBox from "./ProductBox";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/HomeStyle";
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
      <div>
        <h2>Szanowny Inwestorze.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          in blanditiis quia dolore itaque amet quo commodi quos a aperiam? Hic
          error quo necessitatibus nemo laboriosam odio tempora eveniet fuga?
        </p>
        <button>umów się na spotkanie</button>
      </div>
      <Slider />
      <Map />
    </div>
  );
}

export default withStyles(styles)(Home);
