import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    width: "100%",
    position: "sticky",
    top: "0",
    display: "flex",
    flexDirection: "column",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: "5px 0 6px 0",
    backgroundColor: colors.mainDark,

    "& a:hover": {
      color: colors.mainBlue,
    },
  },
  contactLink: {
    marginRight: "1rem",
    cursor: "pointer",
    fontFamily: fonts.mainFont,
    fontSize: "12px",
    color: colors.mainWhite,
    textDecoration: "none",
    transition: ".5s",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    background: "transparent",
    height: "4.5rem",
    transition: ".5s",
  },
  menuContainerScrolled: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: colors.secondDark,
    height: "2.5rem",
    transition: ".5s",
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
};
