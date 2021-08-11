import React, { useState, useEffect } from "react";
import ContactTop from "./ContactTop";
import { NavLink, Link } from "react-router-dom";

import BurgerIcon from "./BurgerIcon";
import Spinner from "../../components/Spinner";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
//animation mobile menu
import "./styles/AnimTransform.css";

//refactor the code to avoid building two menus
function Navbar({ classes, contacts, pageData }) {
  const [manuScrolled, setMenuScrolled] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 60) {
        setMenuScrolled(true);
      }
      if (window.scrollY <= 50) {
        setMenuScrolled(false);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 800) {
        setShowBurger(false);
        setBurgerOpen(false);
      } else setShowBurger(true);
    });
    return () => {
      window.removeEventListener("scroll", null);
      window.removeEventListener("resize", null);
    };
  }, []);

  return (
    <header className={classes.root}>
      <ContactTop contacts={contacts} />

      {showBurger ? (
        <div
          onClick={() => setBurgerOpen(!burgerOpen)}
          className={`containerBurger${burgerOpen ? " active" : ""}`}
        >
          <BurgerIcon />
          <nav
            className={`${classes.menuContainerMobile} ${
              burgerOpen ? `${classes.mobileOpened} animMobileTransform` : ""
            }`}
          >
            <ul className={classes.menuMobile}>
              {pageData.map((item) => (
                <li className={classes.menuLinkMobile}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <div>
          <nav
            className={
              !manuScrolled
                ? classes.menuContainer
                : classes.menuContainerScrolled
            }
          >
            <ul className={classes.menu}>
              {pageData.map((item) => (
                <li className={classes.menuLink}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default withStyles(styles)(Navbar);
