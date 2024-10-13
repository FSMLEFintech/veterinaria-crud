import React, { useState } from 'react';
import Header from '../components/Header2';  // Asegúrate de que la ruta es correcta
import Sidebar from '../components/Sidebar';  // Incluye el Sidebar aquí
import MainContent from '../components/MainContent';   // Asegúrate de que la ruta es correcta
import '../styles/Dashboard.css';  // Asegúrate de que este archivo existe y está correctamente enlazado

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);  // Controla la visibilidad del Sidebar
  const [selectedOption, setSelectedOption] = useState("dashboard"); // Controla la opción seleccionada en el Sidebar

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);  // Cambia el estado de visibilidad del Sidebar
  };

  // Función para manejar la selección de opciones del Sidebar
  const handleOptionSelect = (option) => {
    setSelectedOption(option);  // Cambia la opción seleccionada
  };

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <Header onToggleSidebar={toggleSidebar} />  {/* El Header controla la visibilidad del Sidebar */}

      {/* Contenedor principal */}
      <div className="flex">
        {/* Sidebar con visibilidad controlada */}
        <div className={`transition-transform duration-300 ease-in-out ${sidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
          <Sidebar onOptionSelect={handleOptionSelect} />  {/* Sidebar que se puede ocultar o mostrar */}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <MainContent selectedOption={selectedOption} />  {/* Pasamos la opción seleccionada al MainContent */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
