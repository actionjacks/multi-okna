import sizes from "../../../styles/BreakPoints";

export default {
  navbarContainer: {},
  navbarMobile: {
    [sizes.up("md")]: {
      display: "none",
    },
  },
  navbarBurger: {
    fontSize: "3rem",
  },
  navbarDesktop: {
    [sizes.down("md")]: {
      display: "none",
    },

    display: "flex",
    justifyContent: "space-between",
    padding: "0 1.2rem",
  },
  navbarBtn: { fontSize: "1.2rem", cursor: "pointer" },
};
