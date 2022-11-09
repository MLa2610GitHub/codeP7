import { NavLink } from 'react-router-dom';
import Logo from '../Components/Logo';
import '../Styles/index.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-div">
          <Logo />
        </div>
        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <li>A Propos</li>
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
