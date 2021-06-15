import sizes from "../../../styles/BreakPoints";

export default {
  navbarContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "99",
    margin: "5% 5%",
  },
  navbarMobile: {
    [sizes.up("md")]: {
      display: "none",
    },
  },
  navbarBurger: {
    fontSize: "3rem",
  },
  navbarDesktop: {
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
    borderRadius: "15px",

    [sizes.down("md")]: {
      display: "none",
    },

    display: "flex",
    justifyContent: "space-between",
    padding: "0 1.2rem",
  },
  navbarBtn: {
    fontFamily: "'Roboto', sans-serif",
    margin: "10px",
    fontSize: "1rem",
    marginLeft: "10px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    transition: "1s",
  },
  navbarBtnActive: {
    borderBottom: "1px solid red",
  },
};
