import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/index.css';

/* Utilisation du hook 'useNavigate' de react-router-dom pour renvoyer à la page d'accueil en cas d'erreur sur la page */

export default function ErrorPage() {
  let navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };
  return (
    <>
      <div className="error-page">
        <h1 className="error-page-chiffre-404">404</h1>
        <h2 className="error-page-h2">
          Oups! La page que vous demandez n'existe pas !
        </h2>
        <p className="error-page-p" onClick={goHome}>
          Retourner sur la page d’accueil
        </p>
      </div>
    </>
  );
}
