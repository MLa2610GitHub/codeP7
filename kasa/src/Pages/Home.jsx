import React from 'react';
import background from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import List from '../Components/List';
import '../Styles/index.css';

export default function Home() {
  return (
    <body>
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
         <List />
    </body>
  );
}