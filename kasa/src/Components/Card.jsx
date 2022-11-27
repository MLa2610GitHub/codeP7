import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/FicheLogement';
import logements from '../logements.json';
import '../Styles/index.css';

/*On itère sur le tableau contenant les infos des logements */
/*On crée une fiche cliquable contenant un titre, une photo et menant vers un logement précis grâce à l'id */
/*La key permet à React de faire un re-render optimal si un élément est modifié  */
/*Un fragment englobe des éléments adjacents */

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
