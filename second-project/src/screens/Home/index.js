import React from "react";

import MenuBtn from "../../components/MenuBtn";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HomeStyles";

import homeTopBanner from "./assets/homeTopBanner.webp";

function Home({ classes, data }) {
  return (
    <main className={classes.root}>
      {data && (
        <div className={classes.topHomeContainer}>
          <div className={classes.leftSite} data-aos="flip-up">
            <h2 className={classes.headerTitle}>{data[0].headerTitle}</h2>
            <h3 className={classes.smallHeader}>{data[0].smallHeader}</h3>
            <p className={classes.description}>{data[0].description}</p>
          </div>
          <div className={classes.rightSite} data-aos="flip-up">
            <img src={homeTopBanner} alt="" className={classes.homeTopBanner} />
          </div>
        </div>
      )}
      {data && (
        <div className={classes.middleHomeContainer}>
          <p className={classes.contactParagraph} data-aos="fade-left">
            {data[0].contactParagraph}
          </p>
          <MenuBtn />
        </div>
      )}
    </main>
  );
}

export default withStyles(styles)(Home);
