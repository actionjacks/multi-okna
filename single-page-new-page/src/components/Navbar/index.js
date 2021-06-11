import React from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";

import MenuIcon from "@material-ui/icons/Menu";

function Navbar({ handleClick = null, classes }) {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarMobile}>
        <MenuIcon className={classes.navbarBurger} />
      </div>
      <div className={classes.navbarDesktop}>
        <button className={classes.navbarBtn} value="1" onClick={handleClick}>
          stron 1
        </button>
        <button className={classes.navbarBtn} value="2" onClick={handleClick}>
          stron 2
        </button>
        <button className={classes.navbarBtn} value="3" onClick={handleClick}>
          stron 3
        </button>
        <button className={classes.navbarBtn} value="4" onClick={handleClick}>
          stron 4
        </button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);
