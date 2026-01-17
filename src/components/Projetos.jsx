import React from 'react';
// Adicionei FaDesktop para representar o sistema web
import { FaExternalLinkAlt, FaDesktop } from 'react-icons/fa';

function Projetos() {
  return (
    <section id="projetos">
      <div className="container">
        <h2 className="section-title">Soluções de Sucesso</h2>
        
        <div className="servicos-grid">
          
          {/* Projeto 1: BeaMedControl (Agora com link!) */}
          <div className="card">
            <h3>BeaMedControl</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-primary)', fontWeight: 'bold', marginBottom: '15px' }}>
              <FaDesktop /> SISTEMA DE GESTÃO HOSPITALAR
            </div>
            <p>
              Sistema de alta complexidade para controle de medicamentos e registros de pacientes. 
              Foco em segurança rigorosa de dados e facilidade de uso para enfermeiros e cuidadores.
            </p>
            {/* Botão de Ação Principal */}
            <a 
              href="https://beamedcontrol.web.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary" // Usa o mesmo estilo do botão do Hero
              style={{ marginTop: '25px', display: 'inline-flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'center' }}
            >
              Acessar Sistema ao Vivo <FaExternalLinkAlt />
            </a>
          </div>

          {/* Projeto 2: Conex Contadores */}
          <div className="card">
            <h3>Conex Contadores</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-primary)', fontWeight: 'bold', marginBottom: '15px' }}>
              <FaExternalLinkAlt /> SITE INSTITUCIONAL
            </div>
            <p>
              Plataforma moderna para captação de clientes e apresentação de serviços contábeis. 
              Design focado em autoridade e conversão de novos leads para o escritório.
            </p>
            {/* Link secundário */}
            <a 
              href="https://conexcontadores.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary" // Usa o estilo secundário para diferenciar
              style={{ marginTop: '25px', display: 'inline-flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'center' }}
            >
              Ver projeto ao vivo →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projetos;