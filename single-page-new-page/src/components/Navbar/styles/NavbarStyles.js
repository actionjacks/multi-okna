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
    border: "5px solid gray",
    borderRadius: "15px",

    [sizes.down("md")]: {
      display: "none",
    },

    display: "flex",
    justifyContent: "space-between",
    padding: "0 1.2rem",
  },
  navbarBtn: {
    margin: "10px",
    fontSize: "1.2rem",
    marginLeft: "10px",
    cursor: "pointer",
  },
  navbarBtnActive: {
    background: "red",
  },
};
