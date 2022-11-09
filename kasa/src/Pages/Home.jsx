import React from 'react';
import background from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';

import Card from '../Components/Card';

import '../Styles/index.css';

export default function Home() {
  return (
    <>
      <section
        className="home-section1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="home-section1-text-bgd">
          <p className="home-section1-text">Chez vous, partout et ailleurs</p>
        </div>
      </section>

      <section className="gallery">
        <Card />
      </section>
    </>
  );
}
