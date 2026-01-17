import React, { useState, useEffect } from 'react';
// Importando o ícone de seta para cima da biblioteca que acabamos de instalar
import { FaAngleUp } from 'react-icons/fa'; 

function ScrollToTop() {
  // 'isVisible' é um estado que controla se o botão está visível ou não
  const [isVisible, setIsVisible] = useState(false);

  // Esta função "ouve" o scroll da página
  const toggleVisibility = () => {
    // Se o usuário rolou mais de 300 pixels para baixo, mostre o botão
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Esta função rola a página de volta ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Deixa a rolagem suave
    });
  };

  // useEffect é usado para adicionar e remover o "ouvinte" de scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Isso é uma "limpeza": remove o ouvinte quando o componente "morre"
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // O array vazio faz isso rodar só uma vez (na montagem)

  return (
    <div className="scroll-to-top">
      {/* O botão só é renderizado se 'isVisible' for verdadeiro */}
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-btn">
          <FaAngleUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;