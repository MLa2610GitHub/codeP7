import React from 'react';
import { useState } from 'react';
import '../Styles/index.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-item-title" onClick={() => setIsOpen(!isOpen)}>
          <h3>{props.title}</h3>
          <div className="dropdown-chevron">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        {isOpen && (
          <div>
            <div className="dropdown-content-description">
              <p>{props.description}</p>
            </div>
            <div className="dropdown-content-equipments">
              <ul>
                <li>{props.equipments}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
