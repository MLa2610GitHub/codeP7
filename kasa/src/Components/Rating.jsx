import React from 'react';
import '../Styles/index.css';
import '../logements.json';
import { FaStar } from 'react-icons/fa';

export default function Rating({ rating, index }) {
  const FilledStar = (
    <FaStar
      key={index}
      style={{ color: 'rgba(255, 96, 96, 1)' }}
      className="filled-star"
    />
  );

  const EmptyStar = (
    <FaStar
      key={index}
      style={{ color: 'rgba(227, 227, 227, 1)' }}
      className="empty-star"
    />
  );

  const ratingValue = [];

  for (let i = 0; i < rating; i++) {
    ratingValue.push(FilledStar, index);
  }

  for (let j = ratingValue.length; j < 5; j++) {
    ratingValue.push(EmptyStar, index);

    return (
      <div className="rating">
        <span key={`${rating}-${index}`}>{ratingValue}</span>
      </div>
    );
  }
}
