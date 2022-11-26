import React from 'react';
import '../Styles/index.css';
import '../logements.json';
import filledStar from '../assets/filledStar.svg';
import emptyStar from '../assets/emptyStar.svg';

export default function Rating({ rating }) {
  const ratingValue = [];

  for (let i = 0; i < rating; i++) {
    ratingValue.push(
      <img
        key={'filledStar' + i}
        className="filledStarRating"
        src={filledStar}
        alt="filled star"
      />
    );
  }

  for (let j = ratingValue.length; j < 5; j++) {
    ratingValue.push(
      <img
        key={'emptyStar' + j}
        className="emptyStarRating"
        src={emptyStar}
        alt="empty star"
      />
    );

    return (
      <div className="rating">
        <span key={rating}>{ratingValue}</span>
      </div>
    );
  }
}
