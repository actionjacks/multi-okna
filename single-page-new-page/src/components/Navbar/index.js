import React from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import "./styles/Navbar.css";

import MenuIcon from "@material-ui/icons/Menu";

function Navbar({
  handleClick = null,
  classes,
  selected,
  btnNumbers,
  disableBtns,
}) {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarMobile}>
        <MenuIcon className={classes.navbarBurger} />
      </div>
      <div className={classes.navbarDesktop}>
        {btnNumbers.map((item, index) => (
          <>
            <button
              disabled={disableBtns || selected === index}
              className={`${classes.navbarBtn} ${
                selected === index ? classes.navbarBtnActive : ""
              }`}
              value={index}
              onClick={(e) => handleClick(e, "navbarClick")}
            >
              {btnNumbers[index]}
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);
