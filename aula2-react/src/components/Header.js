import React from 'react';
import './Header.css';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header>
      <h1>Ttilane</h1>
      <nav>
        <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>Sobre</a>
        <a href="#projetos" onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); }}>Projetos</a>
        <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a>
      </nav>
      <button className="btn-rosa" id="btnFaleComigo" onClick={() => scrollToSection('contato')}>
        Fale comigo
      </button>
    </header>
  );
}

export default Header;