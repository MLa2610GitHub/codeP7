import React from 'react';
import logements from '../logements.json';
import '../Styles/index.css';

import { FaStar } from 'react-icons/fa';

export default function Ratings() {
  return (
    <div className="rating">
      {logements.rating.map((rating, index) => {
        <div key={index}>{rating}</div>;

        return (
          <div>
            <span>
              <FaStar />
            </span>
          </div>
        );
      })}
      ;
    </div>
  );
}
