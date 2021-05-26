import sizes from "../styles/BreakPoints";

export default {
  home: {},
  products: {
    display: "flex",
    backgroundColor: "gray",
    padding: "5px",

    [sizes.down("md")]: {
      display: "block",
      padding: "10px",
    },
  },
  productLeft: {
    display: "flex",
    flex: 1,
    width: "100%",

    [sizes.down("md")]: {
      width: "80%",
      margin: "auto",
    },
  },
  productRight: {
    display: "flex",
    flexWrap: "wrap",
    flex: 0.8,
    width: "100%",
    justifyContent: "space-between",

    [sizes.down("md")]: {
      width: "80%",
      margin: "auto",
    },
  },
};
