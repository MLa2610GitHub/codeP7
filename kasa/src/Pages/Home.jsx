import React from 'react';
import background from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import Card from '../Components/Card';
import '../Styles/index.css';

export default function Home() {
  return (
    <>
      <section
        className="home-banner"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="home-banner-content">
          <div className="home-banner-text-bgd">
            <p className="home-banner-text">Chez vous, partout et ailleurs</p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <Card />
      </section>
    </>
  );
}
