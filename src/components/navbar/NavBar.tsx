import { HashLink } from "react-router-hash-link";

import logo from "../../assets/logo.png";

import "./navbar.style.css";

const NavBar = () => {
  return (
    <>
      <header className="navbar-main">
        <nav className="navbar container">
          <img src={logo} className="logo" alt="Logo" />
          <ul>
            <li>
              <HashLink smooth to="/#init" className="hashlink">
                Início
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#aboutme" className="hashlink">
                Sobre Mim
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#technologies" className="hashlink">
                Tecnologias
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects" className="hashlink">
                Projetos
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contacts" className="hashlink">
                Contatos
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
