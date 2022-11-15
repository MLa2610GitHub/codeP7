import React from 'react';
import '../Styles/index.css';
import "../logements.json";

const Rating = ({rating}) => {

  const stars = [];
  const star = ( <i className="fa-regular fa-star"></i> );
   const greyStar = ( <i className="fa-regular fa-star"></i> );
  
  return (
<>
      {stars.map((e, index) => {
        return 
        <span key={index}>{e}</span>})
        }
    
 </>)

      };

