import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-700 p-4 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold flex items-center">
        <img src="/logo.png" alt="Logo" className="mr-2" />  {/* Asegúrate de que el logo está en la ruta correcta */}
        AGATHA
      </h1>
    </header>
  );
};

export default Header;  // Exportación correcta del componente
