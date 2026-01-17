import React from 'react';
// Importando ícones específicos para cada tipo de solução
import { FaRocket, FaChartBar, FaLaptopCode } from 'react-icons/fa';

function Servicos() {
  return (
    <section id="servicos" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Soluções Inteligentes para seu Negócio</h2>
        
        <div className="servicos-grid">
          
          {/* Serviço 1: Foco em Vendas/Marketing */}
          <div className="card">
            <div className="icon-wrapper">
              <FaRocket /> 
            </div>
            <h3>Sites de Alta Conversão</h3>
            <p>
              Desenvolvimento de Landing Pages e sites institucionais rápidos, 
              otimizados para o Google e focados em transformar visitantes em clientes reais.
            </p>
          </div>

          {/* Serviço 2: Foco em Gestão/Dados */}
          <div className="card">
            <div className="icon-wrapper">
              <FaChartBar /> 
            </div>
            <h3>Sistemas de Gestão (Web & Mobile)</h3>
            <p>
              Automatize processos e gerencie sua empresa com painéis administrativos 
              personalizados, acessíveis de qualquer dispositivo com segurança.
            </p>
          </div>

          {/* Serviço 3: Foco em Tecnologia/Consultoria */}
          <div className="card">
            <div className="icon-wrapper">
              <FaLaptopCode /> 
            </div>
            <h3>Consultoria Técnica e MVP</h3>
            <p>
              Tem uma ideia de aplicativo? Eu ajudo você a validar o conceito e 
              construir a primeira versão funcional (MVP) para entrar no mercado rapidamente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Servicos;