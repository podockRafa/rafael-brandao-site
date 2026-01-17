import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Contato() {
  return (
    <section id="contato" className="contato-section">
      <div className="container">
        <div className="contato-card">
          <h2 className="section-title">Pronto para tirar seu projeto do papel?</h2>
          <p className="contato-description">
            A transformação digital do seu negócio começa com uma conversa. 
            Estou à disposição para desenhar a melhor solução para você.
          </p>

          <a 
            href="https://wa.me/5521980538453?text=Olá%20Rafael,%20vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary btn-large"
          >
            <FaWhatsapp /> SOLICITAR ORÇAMENTO NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;