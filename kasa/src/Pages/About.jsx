import React from 'react';
import background from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';
import '../Styles/index.css';
import Dropdown from '../Components/Dropdown';

export default function About() {
  return (
    <>
      <section
        className="section1-about"
        style={{ backgroundImage: `url(${background})` }}
      ></section>

      <section>
        <div className="dropdown-about">
          <div className="dropdown-item-about">
            <div className="rectangle-about">

               <Dropdown />
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}
