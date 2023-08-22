import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import logo from "../../assets/logo.png";

import "./navbar.style.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-main ${isScrolled ? "navbar-main-scroll" : ""}`}>
      <nav className="navbar container">
        <img src={logo} className="logo" alt="Logo" />
        <ul>
          {[
            { id: "inicio", label: "Início" },
            { id: "quem-sou", label: "Quem Sou" },
            { id: "o-que-faço", label: "O que faço" },
            { id: "tecnologias", label: "Tecnologias"},
            { id: "portifolio", label: "Portifólio" },
            { id: "contatos", label: "Entre em Contato" },
          ].map((item) => (
            <li key={item.id}>
              <HashLink smooth to={`/#${item.id}`} className="hashlink">
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
