import React from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  return (
    <form className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Nombre"
        className="w-full border border-[#6B7280] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-[#6B7280] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
      />
      <textarea
        placeholder="Mensaje"
        className="w-full border border-[#6B7280] rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
      />
      <Button type="submit" className="w-full">Enviar</Button>
    </form>
  );
};

export default ContactForm;
