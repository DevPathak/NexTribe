import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">NexTribe Studio</div>
      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className="nav__link">
            Home
          </NavLink>
        </li>
         <li>
          <NavLink to="/" className="nav__link">
            PC GAMES
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav__link">
            MOBILE GAMES
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/policy" className="nav__link">
            ABOUT US
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/" className="nav__link">
            NEXTRIBE SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav__link">
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
