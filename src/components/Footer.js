import React from "react";

import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import styles from "../styles/FooterStyle";

function Footer({ classes }) {
  return (
    <div className={classes.root}>
      <div>
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div className={classes.contactContainer}>
        <a href="tel:607473123">zadzwoń 607 473 123</a>
        <a href="mailto:biuro@multi-okna.pl">biuro@multi-okna.pl</a>
      </div>
    </div>
  );
}

export default withStyles(styles)(Footer);
