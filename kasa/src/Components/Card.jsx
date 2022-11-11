import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/FicheLogement';
import logements from '../logements.json';
import '../Styles/index.css';

export default function Card() {
  return (
    <>
      <div className="gallery-card">
        {logements.map((fiche) => {
          const title = fiche.title;

          return (
            <Link
              className="cover-home-link"
              key={fiche.id}
              to={`/fiche/${title} `}
              state={{ id: fiche.id }}
            >
              <div className="cover-home-card">
                <div className="cover-home-card-img">
                  <img src={fiche.cover} alt="" className="cover-img" />
                </div>
             
                <div className="cover-home-card-title">
                <h2> {fiche.title} </h2>
                </div> 
              </div>
            </Link>
          );
        })}
        ;
      </div>
    </>
  );
}
