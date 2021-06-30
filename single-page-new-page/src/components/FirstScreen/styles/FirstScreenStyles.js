import sizes from "../../../styles/BreakPoints";
import color from "../../../styles/Colors";

export default {
  root: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  heading: {
    backgroundColor: color.colorSecondaryLightTransparent,
    width: "70%",
    padding: "35px 25px 25px 25px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "2",
  },
  about: {
    textAlign: "center",
    color: color.colorPrimaryTeal,
    textShadow: `1px 1px 1px ${color.colorPrimaryDark}`,
    letterSpacing: "2px",
    fontWeight: "700",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1.5rem",

    [sizes.down("sm")]: {
      display: "none",
    },
  },
  ourOffer: {
    color: color.colorPrimaryDark,
    letterSpacing: "2px",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    fontWeight: "700",
    padding: "0 55px",

    [sizes.down("sm")]: {
      textAlign: "left",
      padding: "0 5px",
    },
  },
};
