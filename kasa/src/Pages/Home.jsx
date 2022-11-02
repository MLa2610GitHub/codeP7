import React from 'react';
import background from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import Card from '../Components/Card';
import '../Styles/index.css';

export default function Home() {
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

     <section className='Gallery'>

      
     </section>
         <Card />
    </>
  );
}