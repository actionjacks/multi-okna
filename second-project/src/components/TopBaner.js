import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import styled from "styled-components";
import colors from "../root-styles/Colors";
import img from "./../assets/img3_.webp";

function TopBaner({ homeSlogan }) {
  return (
    <Container>
      <HomeSlogan data-aos="fade-right">{homeSlogan}</HomeSlogan>
      <Banner data-aos="zoom-out" src={img} data-aos="fade-down" />
    </Container>
  );
}

export default TopBaner;

const Container = styled.div`
  transition: 0.3s;

  @media (max-width: 575.98px) {
  }
`;
const HomeSlogan = styled.h1`
  transition: 0.3s;
  position: absolute;
  top: 20%;
  right: 0;
  z-index: 2;
  padding: 1rem;
  text-align: right;
  font-size: 106px;
  text-transform: uppercase;
  line-height: 90px;
  color: rgb(89, 177, 191);

  @media (max-width: 767.98px) {
    font-size: 50px;
  }
`;
const Banner = styled(LazyLoadImage)`
  transition: 0.3s;
  opacity: 0.9;
  object-fit: cover;
  width: 100%;
  z-index: -1;
  border-bottom: solid 5px ${colors.mainBlue};
  height: 100vh;

  @media (max-width: 575.98px) {
  }
`;
