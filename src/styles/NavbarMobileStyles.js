import sizes from "../styles/BreakPoints";

const styles = {
  /* Position and sizing of burger button */
  bmBurgerButton: {
    zIndex: "1110",
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "-50px",
    top: "36px",
  },
  /* Color/shape of burger icon bars */
  bmBurgerBars: {
    // background: "#373a47",
  },
  /* Color/shape of burger icon bars on hover*/
  bmBurgerBarsHover: {
    // background: "#a90000",
  },
  /* Position and sizing of clickable cross button */
  bmCrossButton: {
    position: "absolute",
    top: "-30px",
    left: "30px",
    height: "24px",
    width: "24px",
    backgroundColor: "red",
  },
  /* Color/shape of close button cross */
  bmCross: {
    color: "white",
    background: "transparent",
  },
  /* Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100%",
  },
  /* General sidebar styles */
  bmMenu: {
    background: "rgba(194, 194, 194,0.6)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  /* Morph shape necessary with bubble or elastic */
  bmMorphShape: {
    fill: "rgba(194, 194, 194,1)",
  },
  /* Wrapper for item list */
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    padding: "0.8em",
    marginLeft: "3rem",
  },
  /* Individual item */
  bmItem: {
    marginTop: "0.7rem",
    fontSize: "1.4rem",
    display: "inline-block",
    color: "black",
    // backgroundColor: "rgb(235, 235, 235)",
    textShadow: "0px 5px 6px rgba(194, 194, 194, 1)",
    textDecoration: "none",
    borderBottom: "1px solid black",
    " &:hover": {
      color: "red !important",
    },
  },
  /* Styling of overlay */
  bmOverlay: {
    background: "rgba(194, 194, 194,0.1)",
  },
};
export default styles;
