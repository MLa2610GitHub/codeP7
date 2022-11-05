import React from 'react';
import logo from '../assets/logo.png';
import '../Styles/index.css';

function Footer() {
  const texteFooter = '© 2020 Kasa. All rights reserved';

  return (
    <>
    <div className="footerContent">
      <img src={logo} alt="Kasa" className="logoFooter" />

      <div className="textFooter">
        <p className="texteFooter">{texteFooter}</p>
      </div>
    </div>
    </>
  );
}

export default Footer;