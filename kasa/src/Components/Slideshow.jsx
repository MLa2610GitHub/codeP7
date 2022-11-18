import React from 'react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../logements.json';
import '../Styles/index.css';

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    const images = pictures.length;
    setCurrentSlide((currentSlide + 1) % images);
  };

  const prev = () => {
    const images = pictures.length;
    let current = currentSlide;

    current -= 1;
    if (current < 0) {
      current = images - 1;
    }

    setCurrentSlide(current);
  };

  return (
    <>
      <div className="container-slideshow">
        <div className="slides">
          {pictures.map((picture, index) => (
            <div
              className="slides-fade"
              hidden={currentSlide === index ? false : true}
            >
              <div className="numbertext">
                {index + 1} / {pictures.length}
              </div>

              <img src={picture} alt="" />
            </div>
          ))}

          <button className="arrow-back" onClick={prev}>
            {FaChevronLeft}
          </button>
          <button className="arrow-forward" onClick={next}>
            {FaChevronRight}
          </button>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
