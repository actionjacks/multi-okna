import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    overflow: "hidden",
  },
  topHomeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",

    [sizes.down("sm")]: {
      flexDirection: "column",
    },
  },
  leftSite: {
    flex: "1",
    padding: "2.8rem",
  },
  headerTitle: {
    fontFamily: fonts.mainFont,
    color: colors.mainBlue,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "5rem",

    [sizes.down("sm")]: {
      fontSize: "3rem",
    },
  },
  smallHeader: {
    fontFamily: fonts.mainFont,
    color: colors.mainDark,
    fontWeight: "400",
    fontSize: "2rem",

    [sizes.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  description: {
    fontFamily: fonts.mainFont,
    color: colors.mainDark,
    fontSize: "1rem",
    fontWeight: "400",
  },
  rightSite: {
    flex: "2",
    zIndex: "-2",
  },
  homeTopBanner: {
    minWidth: "100%",
    width: "100%",
  },
  middleHomeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    padding: "3.5rem 5rem",

    [sizes.down("sm")]: {
      flexDirection: "column",
      padding: "2.5rem ",
    },
  },
  contactParagraph: {
    fontFamily: fonts.mainFont,
    color: colors.secondDark,
    marginTop: "15px",
    fontSize: "1.2rem",
    textAlign: "left",

    [sizes.down("sm")]: {
      fontSize: "1rem",
    },
  },
  bottomHomeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomParagraph: {
    fontFamily: fonts.mainFont,
    color: colors.mainDark,
    fontWeight: "400",
    fontSize: "2rem",

    [sizes.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  span: {
    width: "100%",
    height: "8px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  ourBrandsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "1.7rem",

    [sizes.down("sm")]: {
      padding: ".5rem",
    },
  },
};
