import React from 'react';
import { Link } from 'react-router-dom';

import logements from '../logements.json';

export default function Card() {
  return (
    <>
      <div className="gallery">
               <li className="cardGallery">
            {logements.map((logement) => {
              const title = logement.title;

              return (
                <div className="card">
                  <div key={logement.id}>
                        <h2 className="cardTitle">
                            <Link to={`/fiche/${title} `} state={{ id: logement.id }}>
                            {logement.title}
                            </Link>
                        </h2>
                  </div>
                </div>
              );
            })}
            ;
          </li>
      
      </div>
    </>
  );
}
