import React from 'react';
import Logo from './Logo';
import '../Styles/index.css';

function Footer() {
  const texteFooter = '© 2020 Kasa. All rights reserved';

  return (
    <>
    <footer>
      <div className="footerContent">
        <div className="logoDivFooter">
          <Logo fill="#FFFFFF" />
        </div>

        <div className="textFooter">
          <p className="texteFooter">{texteFooter}</p>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
