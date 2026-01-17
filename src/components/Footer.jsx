import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-minimal">
          {/* Ícones menores e discretos */}
          <div className="footer-icons">
            <a href="https://instagram.com/SEU_USER" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/in/SEU_USER" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:rafinhabrandao3@gmail.com"><FaEnvelope /></a>
          </div>

          <p className="copyright">
            © {currentYear} — <strong>Rafael Brandão</strong> • Soluções Digitais Profissionais
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;