import React from 'react';
import '../Styles/index.css';

export default function Tags({ tags, index }) {
  return (
    <div className="tags-wrapper">
      {tags.map((tag) => {
        return (
          <div className="tags-logement">
            <span key={index}>{tag} </span>
          </div>
        );
      })}
    </div>
  );
}
