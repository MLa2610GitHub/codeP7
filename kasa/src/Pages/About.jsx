import React from 'react';
import background from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import '../Styles/index.css';
import Dropdown from '../Components/dropdown';

export default function About() {
  return (
    <>
      <section
        className="section1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="section1TextBgd">
          <p className="textSection1">Chez vous, partout et ailleurs</p>
        </div>
      </section>

      <section>
       
        <div className="dropdown-about">
           <Dropdown />
          <div className="dropdown-item-about"></div>
        </div>
      </section>
    </>
  );
}
