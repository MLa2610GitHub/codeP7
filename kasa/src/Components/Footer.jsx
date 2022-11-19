import React from 'react';
import Logo from './Logo';
import '../Styles/index.css';

function Footer() {
  const texteFooter = '© 2020 Kasa. All rights reserved';

  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="logo-footer">
            <Logo fill="#FFFFFF" />
          </div>

          <div className="text-footer">
            <p className="texte-footer">{texteFooter}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
