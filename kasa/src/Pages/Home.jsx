import React from 'react';
import background from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import Card from '../Components/Card';
import '../Styles/index.css';

export default function Home() {
  return (
    <>
      <main className="home-page">
        <section className="home-banner">
          <div
            className="home-banner-content"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <div className="home-banner-text-bgd">
            <h2 className="home-banner-text">Chez vous, partout et ailleurs</h2>
          </div>
        </section>

        <section className="gallery">
          <Card />
        </section>
      </main>
    </>
  );
}
