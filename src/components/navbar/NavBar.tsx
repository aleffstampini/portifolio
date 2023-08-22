import logo from "../../assets/logo.png";

import "./navbar.style.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar container">
        <img src={logo} className="logo" alt="Logo" />
        <ul>
          <li>
            <span className="li-text">Início</span>
          </li>
          <li>
            <span className="li-text">Sobre Mim</span>
          </li>
          <li>
            <span className="li-text">Tecnologias</span>
          </li>
          <li>
            <span className="li-text">Projetos</span>
          </li>
          <li>
            <span className="li-text">Contatos</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
