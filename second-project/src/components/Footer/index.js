import React from "react";

import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import styles from "./styles/FooterStyles";

function Footer({ classes }) {
  return (
    <footer id="-footer" className={classes.root}>
      <p className={classes.footerParagraph}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
        reiciendis, aliquid voluptate accusantium recusandae molestiae placeat
        culpa aperiam ducimus, amet aliquam fugiat perspiciatis totam excepturi
        laborum ipsam necessitatibus officia! Ipsum!
      </p>
      <div className={classes.socialMediaContainer}>
        <p className={classes.socialMediaParagraph}>Odwiedź nas</p>
        <div className={classes.iconContainer}>
          <a href="#">
            <FacebookIcon className={classes.icon} />
          </a>
        </div>
        <div className={classes.rights}>realizacja_actionjacks22@gmail.com</div>
      </div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
