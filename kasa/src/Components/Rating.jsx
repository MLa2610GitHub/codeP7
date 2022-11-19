import React from 'react';
import '../Styles/index.css';
import '../logements.json';
import { FaStar } from 'react-icons/fa';

export const Rating = ({ rating, index }) => {
  const FilledStar = (
    <FaStar style={{ color: 'rgba(255, 96, 96, 1)' }} className="filled-star" />
  );

  const EmptyStar = (
    <FaStar
      style={{ color: 'rgba(227, 227, 227, 1)' }}
      className="empty-star"
    />
  );

  const ratingValue = [];

  for (let i = 0; i < rating; i++) {
    ratingValue.push(FilledStar);
  }

  for (let j = ratingValue.length; j < 5; j++) {
    ratingValue.push(EmptyStar);
  }

  return (
    <div className="rating">
      <span key={index}>{ratingValue}</span>
    </div>
  );
};
export default Rating;
