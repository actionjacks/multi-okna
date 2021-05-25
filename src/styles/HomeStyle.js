import sizes from "../styles/BreakPoints";

export default {
  home: {},
  products: {
    display: "flex",
    width: "100%",
    backgroundColor: "gray",
  },
  productLeft: {
    display: "flex",
    flex: 1,
    width: "100%",
    padding: "0 5px",
  },
  productRight: {
    display: "flex",
    flexWrap: "wrap",
    flexDirectio: "column",
    flex: 0.8,
    padding: "0 5px",
    justifyContent: "space-between",
  },
};
