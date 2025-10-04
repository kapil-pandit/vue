import { useState } from "react";
import "../style/navbar.css";

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header
      className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
      <div className="h-12 cursor-pointer"></div>

      <nav
        className={`navbar-container ${
          showNav ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <div className="navbar-wrapper">
          {/* Logo */}
          <div className="navbar-logo">MyApp</div>

          {/* Menu */}
          <ul className="navbar-menu">
            {["Home", "About", "Contact Us", "Career", "Projects"].map(
              (item) => (
                <li key={item} className="navbar-menu-item">
                  <span className="navbar-menu-link">{item}</span>
                  <span className="navbar-menu-underline"></span>
                </li>
              )
            )}
          </ul>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="btn-login">Login</button>
            <button className="btn-logout">Logout</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
