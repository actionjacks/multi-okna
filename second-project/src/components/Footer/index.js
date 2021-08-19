import React from "react";

import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import styles from "./styles/FooterStyles";

function Footer({ classes }) {
  return (
    <footer id="-footer" className={classes.root}>
      <p className={classes.footerParagraph}>
        <HomeWorkIcon className={classes.contactIcon} />
        Multi-Okna
        <br />
        Polna 4a,
        <br />
        16-010 Wasilków
        <br />
        Telefon: +(48) 607 473 123
      </p>
      <div className={classes.socialMediaContainer}>
        <p className={classes.socialMediaParagraph}>Odwiedź nas</p>
        <div className={classes.iconContainer}>
          <a href="https://www.facebook.com/Multi-Styl-Wasilk%C3%B3w-112286500501916/">
            <FacebookIcon className={classes.fbIcon} />
          </a>
        </div>
        <div className={classes.rights}>realizacja_actionjacks22@gmail.com</div>
      </div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
