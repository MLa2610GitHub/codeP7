import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/index.css';

const ErrorPage = () => {
  return (
    <div>
      <h2>Oups! La page que vous demandez n'existe pas !</h2>
     
      <Link to='/'>Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default ErrorPage;