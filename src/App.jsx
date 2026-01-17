import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFlutuante from './components/WhatsAppFlutuante';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicos />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
      <ScrollToTop />

      <WhatsAppFlutuante />
    </div>
  );
}

export default App;