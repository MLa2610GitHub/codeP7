import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../logements.json';

/*avec la méthode map, on itére sur la liste de logements pour afficher les annonces */
export default function List() {
  return (
    <section className="gallery">
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
            

            <p>{logement.cover}</p>
            <p>{logement.pictures}</p>
            <p>{logement.description}</p>
            <p>{logement.host.name}</p>
            <p>{logement.host.picture}</p>
            <p>{logement.rating}</p>
            <p>{logement.location}</p>
            <p>{logement.equipments}</p>
            <p>{logement.tags}</p>
          </article>
        );
      })}
      ;
    </section>
  );
}