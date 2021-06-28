import sizes from "../../../styles/BreakPoints";

export default {
  root: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  heading: {
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100%",
    padding: "35px 25px 25px 25px",
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "2",
  },
  title: { textAlign: "center" },
  calltoLink: {
    textAlign: "center",
    margin: "auto",
    display: "block",
    border: "1px solid red",
    width: "50%",
  },
};
