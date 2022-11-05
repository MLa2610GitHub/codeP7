import React from 'react';
import logements from '../logements.json';
import '../Styles/index.css';
import { FaStar } from 'react-icons/fa';

export default function Ratings() {
  return (
    <>
      <div className="rating">
        {logements.map((logement) => {
          return (
            <div className="eval-logement">
              <FaStar />
              <div key={logement.id}>{logement.rating}</div>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
}
