import React from 'react';
import { useState } from 'react';
import '../Styles/index.css';
import chevronUp from '../assets/chevronUp.svg';

/* Création d'un composant Dropdown ou liste déroulante */
/* La fonction Dropdown prend en paramètre "props" : il s'agit d'un objet qui contient les paramètres envoyés au composant. Ici, title et description */
export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  /* Utilisation du hook useState appelé à la racine du composant fonctionnel */
  /* On déclare 1 variable locale 'isOpen' */
  /*'setIsOpen' permet de changer la valeur de la variable locale */
  /*dans les paramètres de 'useState' il y a la valeur initiale, ici 'false' */

  const isOpenChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-item-title" onClick={isOpenChange}>
          <h3>{props.title}</h3>
          <img
            className={isOpen ? 'chevronUp' : 'chevronDown'}
            src={chevronUp}
            alt=" "
          />
        </div>

        {isOpen && (
          <div className={isOpen ? 'dropdown-isOpen slide' : 'dropdown-isOpen'}>
            <div className="dropdown-content-description">
              <p>{props.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
