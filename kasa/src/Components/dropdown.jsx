import React from 'react';
import { useState } from 'react';
import '../Styles/index.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function Dropdown({ description, equipments, title, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-item-title" onClick={() => setIsOpen(!isOpen)}>
          <h3>{title}</h3>
          <div className="dropdown-chevron">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        {isOpen && (
          <div className="dropdown-item-content">
            {description}
            {equipments}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
