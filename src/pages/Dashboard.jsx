import React, { useState } from 'react';
import Header from '../components/Header2';  // Asegúrate de que la ruta es correcta
import Sidebar from '../components/Sidebar';  // Incluye el Sidebar aquí
import MainContent from '../components/MainContent';   // Asegúrate de que la ruta es correcta
import '../styles/Dashboard.css';  // Asegúrate de que este archivo existe y está correctamente enlazado

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('home');  // Estado para controlar la opción seleccionada

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <Header />

      {/* Contenedor principal */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar onOptionSelect={setSelectedOption} />  {/* Pasamos la función para cambiar la opción seleccionada */}

        {/* Main Content */}
        <div className="flex-1 p-6">
          <MainContent selectedOption={selectedOption} />  {/* Pasamos la opción seleccionada a MainContent */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
