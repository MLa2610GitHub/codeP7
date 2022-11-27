import React from 'react';
import background from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import Card from '../Components/Card';
import '../Styles/index.css';

/* Affiche la bannière de Kasa + tous les logements disponibles présentés sous forme d'une galerie de cards */

export default function Home() {
  return (
    <>
      <main className="home-page">
        <section
          className="home-banner"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h2 className="home-banner-text">Chez vous, partout et ailleurs</h2>
        </section>

        <section className="gallery">
          <Card />
        </section>
      </main>
    </>
  );
}
