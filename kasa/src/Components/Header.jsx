import { NavLink } from 'react-router-dom';
import Logo from '../Components/Logo';
import '../Styles/index.css';

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
