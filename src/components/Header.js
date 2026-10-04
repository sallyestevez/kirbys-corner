import { React, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "./images/hamburger-menu.svg";

// code used as reference: https://www.codevertiser.com/reactjs-responsive-navbar/
function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src="Hamburger" alt="logo icon" width="50" height="50"></img>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li className="home">
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/games">Games</Link>
              </li> */}
              {/* <li>
                <Link to="/characters">Characters</Link>
              </li> */}
              {/* <li>
                <Link to="/quiz">Quiz!</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
