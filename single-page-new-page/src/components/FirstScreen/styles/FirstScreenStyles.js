import sizes from "../../../styles/BreakPoints";

export default {
  root: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  heading: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: "50%",
    padding: "35px 25px 25px 25px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "2",
  },
  about: {
    textAlign: "center",
    color: "rgb(0, 0, 0)",
    fontFamily: "'Roboto', sans-serif",
    // textShadow: "2px 2px 2px black",
  },
  ourOffer: {
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    padding: "0 55px",
  },
};
