
import React from 'react';
import { useLocation } from 'react-router-dom';
import logements from '../logements.json';


export default function  FicheLogement () {
    const params = useLocation();
    const fiche = logements.find(fiche => fiche.id === params?.state?.id);
    
    return (
      <>

        <h1>{fiche?.title}</h1>
        <p>{fiche.cover}</p>
        <p>{fiche.pictures}</p>
        <p>{fiche.description}</p>
        <p>{fiche.host.name}</p>
        <p>{fiche.host.picture}</p>
        <p>{fiche.rating}</p>
        <p>{fiche.location}</p>
        <p>{fiche.equipments}</p>
        <p>{fiche.tags}</p>
      </>
    );
};
