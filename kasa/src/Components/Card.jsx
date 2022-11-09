import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/FicheLogement';
import logements from '../logements.json';

export default function Card() {
  return (
    <>
      <div className="gallery">
        <div className="gallery-card">
          {logements.map((fiche) => {
            const title = fiche.title;

            return (
              <div className="card">
              
                 <Link to={`/fiche/${title} `} state={{ id: fiche.id }}>
                  {fiche.title}
                  <img src={fiche.cover} alt="" className="cover-img" />
                  <div key={fiche.id}>
                   
                  </div>
                </Link>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
}
