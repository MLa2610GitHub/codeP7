import React from 'react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../logements.json';
import '../Styles/index.css';

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    const pictures = pictures.length;
    setCurrentSlide((currentSlide + 1) % pictures);
  };

  const prev = () => {
    const pictures = pictures.length;
    let current = currentSlide;

    current -= 1;
    if (current < 0) {
      current = pictures - 1;
    }

    setCurrentSlide(current);
  };
  return (
    <>
      <div className="container-slideshow">
        <div className="arrow-back" onClick={prev}>
          {FaChevronLeft}
        </div>
        <div className="slides">
          {pictures.map((picture, index) => (
            <React.Fragment key={index}>
              <img src={picture} alt="" />
              <div className="numbertext">
                {index + 1} / {pictures.length}
              </div>

              <div className="arrow-forward" onClick={next}>
                {FaChevronRight}
              </div>
            </React.Fragment>
          ))}
          <div
            className="changeSlide"
            onClick={() => setCurrentSlide(!currentSlide)}
          ></div>

          <div className=" nextSlide">
            {currentSlide ? <FaChevronRight /> : <FaChevronLeft />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
