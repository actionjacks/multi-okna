import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    overflow: "hidden",
    marginTop: "28rem",
  },
  topHomeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  leftSite: { flex: "1", padding: "2.8rem" },
  rightSite: { flex: "2", zIndex: "-2" },
  homeTopBanner: { minWidth: "100%", width: "100%" },
  middleHomeContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "3.5rem",
  },
  contactParagraph: {},
};
