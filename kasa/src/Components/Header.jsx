import { NavLink } from 'react-router-dom';
import Logo from '../Components/Logo';
import '../Styles/index.css';

/* Le composant NavLink vient de React Router */
/* Il se comporte comme une balise anchor et crée des liens vers les différentes pages  */
/* Il permet aussi d'ajouter des styles aux liens */

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-div">
          <Logo fill="#FF6060" />
        </div>
        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <li className="accueil">Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <li className="about">A Propos</li>
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
