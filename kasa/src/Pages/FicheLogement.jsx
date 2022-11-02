
import React from 'react';
import { useLocation } from 'react-router-dom';
import logements from '../logements.json';


export default function  FicheLogement () {
    const params = useLocation();
    const fiche = logements.find(fiche => fiche.id === params?.state?.id);
       

    return (
      <>
        <div className="FicheLogement">
          <img src={fiche.cover} alt="" className="coverPicture" />
          <img src={fiche.pictures} alt="" />
          <h1 className="titleFicheLogement">{fiche?.title}</h1>
          <p className="tagFicheLogement">{fiche.tags}</p>
          <p className="descriptionFicheLogement">{fiche.description}</p>
          <p>{fiche.host.name}</p>
          <img src={fiche.host.picture} alt="" className="hostPicture" />
          <p>{fiche.rating}</p>
          <p>{fiche.location}</p>
          <p>{fiche.equipments}</p>
        </div>
      </>
    );
};
