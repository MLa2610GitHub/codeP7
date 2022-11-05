import React from 'react';
import { useState } from 'react';
import '../Styles/index.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


function Dropdown({ description, equipments }) {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <>
    <div className="dropdown">
      <div className="dropdown-item">
        <div className="dropdown-item-title" onClick={() => setIsOpen(!isOpen)}>
          <div className="dropdown-chevron">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}{' '}
          </div>
        </div>
        {isOpen && (
          <div className="dropdown-item-content">
            {description} {equipments}
          </div>
        )}
       
      </div>
    </div>
     </>
  );
}

export default Dropdown;
