import "./NavBar.css";

import pageLogo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img class="logo" src={pageLogo} alt="#" />
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/page1">Página 1</a>
          </li>
          <li>
            <a href="/page2">Página 2</a>
          </li>
          <li>
            <a href="/page3">Página 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/profile" className="profile-icon">
          <img class="profile" src={profile} alt="#" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
