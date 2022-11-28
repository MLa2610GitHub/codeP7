import React from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../Components/Dropdown';
import Tags from '../Components/Tags';
import logements from '../logements.json';
import '../Styles/index.css';
import Slideshow from '../Components/Slideshow';
import Rating from '../Components/Rating';
import ErrorPage from './ErrorPage';

/*Params permet de récupérer les paramètres passés dans l'URL */
/*L'id permet de cibler les logements avec précision */
/*La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction passée en argument. */
/*Si l'id ne correspond pas à un logement, l'internaute est dirigé vers la page erreur */

export default function FicheLogement() {
  const identifier = useParams();
  const logement = logements.find((logement) => logement.id === identifier.id);
  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <>
      <main className="fiche-logement">
        <div className="carrousel-logement">
          <Slideshow pictures={logement.pictures} />
        </div>

        <div className="data-logement">
          <div className="adress-logement">
            <div className="localisation-logement">
              <h1 className="title-fiche-logement">{logement?.title}</h1>
              <p className="txt-location-logement">{logement.location}</p>
            </div>

            <div className="tagging-logement">
              <Tags tags={logement.tags} />
            </div>
          </div>

          <div className="data-owner-logement">
            <div className="fiche-owner">
              <div className="details-owner">
                <p>{logement.host.name}</p>
                <img
                  src={logement.host.picture}
                  alt=""
                  className="fiche-logement-host-picture"
                />
              </div>
            </div>

            <div className="rating-logement">
              <Rating rating={logement.rating} />
            </div>
          </div>
        </div>

        <div className="dropdown-logement">
          <div className="dropdown-item-content-description">
            <Dropdown
              title={'Description'}
              description={logement.description}
            />
          </div>
          <div className="dropdown-item-content-equipments ">
            <Dropdown
              title={'Equipements'}
              description={logement.equipments.map((equipment) => (
                <li key={equipment}> {equipment} </li>
              ))}
            />
          </div>
        </div>
      </main>
    </>
  );
}
