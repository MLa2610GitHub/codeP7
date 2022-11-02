
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

          <div className='adressLogement'> 
          <h1 className="titleFicheLogement">{fiche?.title}</h1>
            <p className='txtLocationLogement'>{fiche.location}</p>
          </div>

          <div className='ownerLogement'> 
          <p>{fiche.host.name}</p>
          <img src={fiche.host.picture} alt="" className="hostPicture" />
          </div>
          
          <div className='taggingLogement'>  
          <p className="tagFicheLogement">{fiche.tags}</p>
          </div>

          <div className='evalLogement'> 
          <p>{fiche.rating}</p>
          </div>

          <div className='txtFicheLogement'> 
          <p className="descriptionFicheLogement">{fiche.description}</p>
          </div>

          <div className='txtEquipementsLogement'> 
          <p>{fiche.equipments}</p>
          </div>

        </div>
      </>
    );
};
