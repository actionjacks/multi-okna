import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    zIndex: "99",
    position: "fixed",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid red",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    background: "transparent",
    height: "4.5rem",
    transition: ".6s",
  },
  menuContainerScrolled: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: colors.secondDark,
    height: "2.5rem",
    transition: ".6s",

    [sizes.down("sm")]: {
      display: "none",
    },
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    "& li:hover": {
      backgroundColor: colors.thirdDark,
      color: colors.mainWhite,
    },
  },
  menuLink: {
    padding: "10px 22px",
    listStyleType: "none",
    fontFamily: fonts.mainFont,
    color: colors.mainBlue,
    transition: ".3s",
    "& a": {
      fontSize: "1rem",
      fontWeight: "700",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: ".2s",
    },
  },
  menuContainerMobile: {
    zIndex: "99",
    position: "fixed",
    top: "5%",
    left: "-199px",
    display: "flex",
    flexDirection: "row-reverse",
    background: colors.mainWhite,
    boxShadow: `rgba(0, 0, 0, 0.15)  2.4px 2.4px 3.2px`,
    height: "75%",
    width: "200px",
    transition: ".5s",
  },
  mobileOpened: { left: "0" },
  menuMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    textDecoration: "none",
    "& li:hover": {
      backgroundColor: colors.thirdDark,
      color: colors.mainWhite,
    },
  },
  menuLinkMobile: {
    padding: "10px 30px 10px 10px",
    listStyleType: "none",
    fontFamily: fonts.mainFont,
    color: colors.mainBlue,
    transition: ".3s",
    "& a": {
      fontSize: ".8rem",
      fontWeight: "700",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: ".2s",
    },
  },
};
