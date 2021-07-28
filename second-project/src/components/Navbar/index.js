import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import BurgerIcon from "./BurgerIcon";
import Spinner from "../../components/Spinner";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";

function Navbar({ classes, contacts, pageData }) {
  const [manuScrolled, setMenuScrolled] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setMenuScrolled(true);
      } else setMenuScrolled(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 800) {
        setShowBurger(false);
        setBurgerOpen(false);
      } else setShowBurger(true);
    });
    return () => window.removeEventListener("resize", null);
  }, []);

  return (
    <header className={classes.root}>
      {!pageData && <Spinner />}
      {pageData && (
        <>
          <div className={classes.contactContainer}>
            {contacts.map((item, index) => (
              <a
                className={classes.contactLink}
                href={index === 0 ? `mailto:${item}` : `tel:${item}`}
              >
                {item}
              </a>
            ))}
          </div>
          {showBurger ? (
            <div
              onClick={() => setBurgerOpen(!burgerOpen)}
              className={`container ${burgerOpen ? "active" : ""}`}
            >
              <BurgerIcon />
            </div>
          ) : (
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
          )}
        </>
      )}
    </header>
  );
}

export default withStyles(styles)(Navbar);
