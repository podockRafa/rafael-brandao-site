import React from 'react';

function Hero() {
  return (
    <section id="hero">
  <div className="container">
    <div className="hero-content">
      <h1>Tecnologia que coloca sua empresa no <span>próximo nível.</span></h1>
      <p className="hero-description">
        Desenvolvimento de sites profissionais, landing pages de alta conversão 
        e sistemas de gestão sob medida para o seu negócio.
      </p>
      <div className="hero-cta">
        <a 
  href="https://wa.me/5521980538453?text=Olá%20Rafael,%20vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento%20para%20o%20meu%20negócio!" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn-primary"
>
  SOLICITAR ORÇAMENTO
</a>
        <a href="#servicos" className="btn-secondary">VER SOLUÇÕES</a>
      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;