import React, { useState, useEffect } from "react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import "./ImageSlider.css";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  let id;
  const autplay = () => {
    id = setInterval(() => {
      if (current === 0) {
        setCurrent(length - 1);
      } else setCurrent(current - 1);
      if (current === length - 1) {
        setCurrent(0);
      } else setCurrent(current + 1);
    }, 2000);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    autplay();
  }, []);

  return (
    <div className="slider">
      <BiLeftArrow className="left-arrow" onClick={prevSlide} />
      <BiRightArrow className="right-arrow" onClick={nextSlide} />
      {slides.map((img, i) => (
        <div key={img.id} className={i === current ? "slide active" : "slide"}>
          {i === current && <img src={img.src} className="image" />}
        </div>
      ))}
      <div className="dot-container">
        {slides.map((dot, i) => (
          <div
            className={`dot ${i === current ? "dot--active" : ""}`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
