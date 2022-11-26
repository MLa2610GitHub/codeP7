import React from 'react';
import { useState } from 'react';
import '../Styles/index.css';
import chevronUp from '../assets/chevronUp.svg';

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

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
