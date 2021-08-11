import React from "react";

import OurBrands from "../../components/OurBrands/OurBrands";
import MenuBtn from "../../components/MenuBtn";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HomeStyles";
//import assets
import homeTopBanner from "./assets/homeTopBanner.webp";
//import assets localization from public folder
const brands = [
  "../assets/img1.webp",
  "../assets/img2.webp",
  "../assets/img3.webp",
  "../assets/img4.webp",
  "../assets/img5.webp",
  "../assets/img6.webp",
  "../assets/img7.webp",
  "../assets/img8.webp",
  "../assets/img9.webp",
  "../assets/img10.webp",
  "../assets/img11.webp",
  "../assets/img12.webp",
  "../assets/img13.webp",
  "../assets/img14.webp",
];

function Home({ classes, data }) {
  return (
    <main className={classes.root}>
      {data && (
        <>
          <div className={classes.topHomeContainer}>
            <div className={classes.leftSite} data-aos="flip-up">
              <h2 className={classes.headerTitle}>{data[0].headerTitle}</h2>
              <h3 className={classes.smallHeader}>{data[0].smallHeader}</h3>
              <p className={classes.description}>{data[0].description}</p>
            </div>
            <div className={classes.rightSite} data-aos="flip-up">
              <img
                loading="lazy"
                src={homeTopBanner}
                alt=""
                className={classes.homeTopBanner}
              />
            </div>
          </div>
        </>
      )}
      {data && (
        <div className={classes.middleHomeContainer}>
          <p className={classes.contactParagraph} data-aos="fade-left">
            {data[0].contactParagraph}
          </p>
          <MenuBtn />
        </div>
      )}
      {data && (
        <div className={classes.bottomHomeContainer}>
          <p className={classes.bottomParagraph}>{data[0].ourBrands}</p>
          <div className={classes.ourBrandsContainer}>
            {brands.map((url, index) => (
              <OurBrands key={index} url={url} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default withStyles(styles)(Home);
