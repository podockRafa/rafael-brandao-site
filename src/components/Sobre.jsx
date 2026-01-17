import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaChartLine } from 'react-icons/fa';

function Sobre() {
  return (
    <section id="sobre" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Por que confiar o seu projeto a mim?</h2>
        <p className="hero-description" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
          Diferente de agências tradicionais, eu foco no que realmente importa: 
          {/* Destaque aplicado aqui com cor e peso extra */}
          <strong style={{ color: 'var(--brand-primary)', fontWeight: '800' }}> o retorno do seu investimento</strong>. 
          Desenvolvo soluções que resolvem problemas reais de gestão e vendas.
        </p>

        <div className="servicos-grid">
          <div className="card">
            <div className="icon-wrapper"><FaCheckCircle /></div>
            <h3>Foco no Negócio</h3>
            <p>Eu não entrego apenas código. Entrego ferramentas que ajudam sua empresa a vender mais ou economizar tempo com automação.</p>
          </div>

          <div className="card">
            <div className="icon-wrapper"><FaShieldAlt /></div>
            <h3>Segurança e Robustez</h3>
            <p>Experiência com sistemas críticos (como gestão hospitalar), garantindo que seus dados e os de seus clientes estejam sempre protegidos.</p>
          </div>

          <div className="card">
            <div className="icon-wrapper"><FaChartLine /></div>
            <h3>Parceria Estratégica</h3>
            <p>Acompanho o projeto do conceito à produção, garantindo que a tecnologia evolua junto com o crescimento da sua empresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;