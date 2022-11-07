import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../logements.json';
import '../Styles/index.css';

/*avec la méthode map, on itére sur la liste de logements pour afficher les annonces */
export default function List() {
  return (
    <>
      <section className="galleryList">
        {logements.map((logement) => {
          const title = logement.title.split(' ').join('-');
          /* Les méthodes split et join créent une url facile à lire */

          /*Link permet de naviguer vers une nouvelle page */
          /* on utilise le titre de chaque fiche pour créer un lien vers une annonce précise */
          return (
            <article key={logement.id}>
              <h3>
                <Link to={`/fiche/${title} `} state={{ id: logement.id }}>
                  {logement.title}
                </Link>
              </h3>

              <div>{logement.cover}</div>
              <div>{logement.pictures}</div>
              <div>{logement.location}</div>
              <div>{logement.host.name}</div>
              <div>{logement.host.picture}</div>
              <div>{logement.tags}</div>
              <div>{logement.rating}</div>
              <div>{logement.description}</div>
              <ul className='listEquipments'><li>{logement.equipments}</li>
              </ul>
            </article>
          );
        })}
        ;
      </section>
    </>
  );
}
