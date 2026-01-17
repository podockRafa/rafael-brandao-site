import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Ícones de Redes Sociais */}
        <div className="navbar-social">
          <a href="https://linkedin.com/in/SEU_USER" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/SEU_USER" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5521999999999" target="_blank" rel="noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="mailto:seuemail@exemplo.com" title="E-mail">
            <FaEnvelope />
          </a>
        </div>

        {/* Links de Navegação */}
        <nav>
          <ul className="navbar-nav">
            <li><a href="#servicos">Soluções</a></li>
            <li><a href="#sobre">Diferenciais</a></li>
            <li><a href="#projetos">Cases</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;