import sizes from "../../styles/BreakPoints";

export default {
  root: {
    widtth: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    position: "relative",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    border: "1px solid black",
    borderRadius: "5px",
    marginRight: "15px",
    color: "black",
    fontSize: "2rem",
    "& :hover": {
      scale: "(2)",
    },
  },
  upIcon: {
    fontSize: "2.5rem",
    cursor: "pointer",
    transform: "rotate(-90deg)",
    position: "absolute",
    bottom: "20px",
    right: "50%",
    border: "1px solid black",
    borderRadius: "5px",
  },
  contactContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
  },
  footerLink: {
    textDecoration: "none",
    color: "black",
    padding: "5px",
    backgroundColor: "gray",
    marginBottom: "5px",
  },
  credits: {
    display: "flex",
    width: "20%",
    borderBottom: "1px solid black",
    justifyContent: "flex-end",
    marginLeft: "80%",
  },
};
