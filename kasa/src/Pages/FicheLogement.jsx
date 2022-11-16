import React from 'react';
import { useLocation } from 'react-router-dom';
import Carrousel from '../Components/Carrousel';
import Dropdown from '../Components/Dropdown';
import Tags from '../Components/Tags';
import logements from '../logements.json';
import '../Styles/index.css';

export default function FicheLogement() {
  const params = useLocation();
  const fiche = logements.find((fiche) => fiche.id === params?.state?.id);

  return (
    <>
      <main>
        <div className="fiche-logement">
          <div className="carrousel-logement">
            <Carrousel pictures={fiche.pictures} />
          </div>

          <div className="data-logement">
            <div className="adress-logement">
              <div className="localisation-logement">
                <h1 className="title-fiche-logement">{fiche?.title}</h1>
                <p className="txt-location-logement">{fiche.location}</p>
              </div>

              <div className="tagging-logement">
                <Tags tags={fiche.tags} />
              </div>
            </div>

            <div className="data-owner-logement">
              <div className="fiche-owner">
                <div className="details-owner">
                  <p>{fiche.host.name}</p>
                  <img
                    src={fiche.host.picture}
                    alt=""
                    className="fiche-logement-host-picture"
                  />
                </div>
              </div>

              <div className="rating">
                <span className="eval-logement">{fiche.rating}</span>
              </div>
            </div>
          </div>

          <div className="dropdown-logement">
            <div className="dropdown-item-content-description">
              <Dropdown description={fiche.description} title={'Description'} />
            </div>

            <div className="dropdown-item-content-equipments">
              <Dropdown title={'Equipements'} equipments={fiche.equipments} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
