import React from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/WindowBoxStyles";

function WindowBox({ url, logo, title, desc, classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <img className={classes.url} src={url} alt="" />
        <div className={classes.descriptionContainer}>
          <img className={classes.logo} src={logo} alt="" />
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(WindowBox);
