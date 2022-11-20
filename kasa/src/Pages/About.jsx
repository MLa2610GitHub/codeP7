import React from 'react';
import background from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';
import '../Styles/index.css';
import Dropdown from '../Components/Dropdown';
import textAbout from '../textAbout.json';

export default function About() {
  return (
    <>
      <section
        className="about-banner"
        style={{ backgroundImage: `url(${background})` }}
      ></section>

      <section>
        <div className="about-dropdown">
          {textAbout.map((textAbout) => {
            return (
              <div className="about-dropdown-item">
                <div className="about-rectangle">
                  <Dropdown
                    title={textAbout.title}
                    description={textAbout.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
