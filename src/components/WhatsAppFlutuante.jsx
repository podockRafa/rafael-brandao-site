import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppFlutuante() {
  return (
    <a 
      href="https://wa.me/5521999999999?text=Olá%20Rafael,%20vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento!" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      title="Falar no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFlutuante;