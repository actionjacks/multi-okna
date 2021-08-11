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
    alignItems: "center",
    padding: "3.5rem",

    [sizes.down("sm")]: {
      flexDirection: "column",
    },
  },
  contactParagraph: {},
  bottomHomeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomParagraph: {},
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
