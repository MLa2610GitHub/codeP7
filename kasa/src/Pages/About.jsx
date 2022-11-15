import React from 'react';
import background from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';
import '../Styles/index.css';
import Dropdown from '../Components/Dropdown';
import textAbout from '../textAbout.json';

export default function About() {
  return (
    <>
      <section
        className="section1-about"
        style={{ backgroundImage: `url(${background})` }}
      ></section>

      <section>
        <div className="dropdown-about">
          {textAbout.map((textAbout) => {
            return (
              <div className="dropdown-item-about">
                <div className="rectangle-about">
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
