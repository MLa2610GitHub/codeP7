import React from 'react';
import { useLocation } from 'react-router-dom';
import Dropdown from '../Components/Dropdown';

import logements from '../logements.json';

export default function FicheLogement() {
  const params = useLocation();
  const fiche = logements.find((fiche) => fiche.id === params?.state?.id);

  return (
    <>
      <div className="fiche-logement">
        <img src={fiche.cover} alt="" className="cover-picture" />
        <img src={fiche.pictures} alt="" />

        <div className="adress-logement">
          <h1 className="title-fiche-logement">{fiche?.title}</h1>
          <p className="txt-location-logement">{fiche.location}</p>
        </div>

        <div className="owner-logement">
          <p>{fiche.host.name}</p>
          <img src={fiche.host.picture} alt="" className="host-picture" />
        </div>

        <div className="tagging-logement">
          <p className="tag-fiche-logement">{fiche.tags} </p>
        </div>

        <div className="rating">
          <div className="eval-logement">{fiche.rating}</div>
        </div>

        <div className="dropdown">
          <div className="dropdown-item">
            <div className="dropdown-item-title">Description</div>

            <div className="dropdown-item-content">
              <Dropdown description={fiche.description} />
            </div>
          </div>

          <div className="dropdown-item">
            <div className="dropdown-item-title">Equipements</div>

            <div className="dropdown-item-content">
              <Dropdown equipments={fiche.equipments} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
