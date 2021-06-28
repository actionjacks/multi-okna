import React from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FirstScreenStyles";

function Windows({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.topContainer}>
        <div className={classes.heading}>
          <h1 className={classes.title}>LOREM</h1>
          <a className={classes.calltoLink} href="tel:+48987654321">
            Zadzwoń +48 987 65 43 21
          </a>
        </div>
      </div>
    </div>
  );
}
//https://swiperjs.com/
export default withStyles(styles)(Windows);
