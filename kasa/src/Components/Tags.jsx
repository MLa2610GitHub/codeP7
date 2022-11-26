import React from 'react';
import '../Styles/index.css';

export default function Tags({ tags }) {
  return (
    <div className="tags-wrapper">
      {tags.map((tag, index) => {
        return (
          <div className="tags-logement" key={index}>
            <span key={`${tag}-${index}`}>{tag} </span>
          </div>
        );
      })}
    </div>
  );
}
