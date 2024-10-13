import React, { useState } from 'react';
import { Users, PawPrint, Home, LogOut, ChevronDown } from "lucide-react";

export default function Sidebar({ onOptionSelect }) {
  const [clientesOpen, setClientesOpen] = useState(false);
  const [mascotasOpen, setMascotasOpen] = useState(false);

  return (
    <aside className="bg-white w-64 shadow-md h-screen sticky top-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Hola</h2>
      </div>
      <nav className="mt-6">
        <div className="px-4 py-2">
          <button 
            onClick={() => onOptionSelect('home')}  // Cambio a Home
            className="flex items-center text-gray-700 hover:bg-gray-200"
          >
            <Home className="mr-3" size={20} />
            Inicio
          </button>
        </div>
        <div className="px-4 py-2">
          <button 
            onClick={() => setClientesOpen(!clientesOpen)} 
            className="flex items-center w-full text-left text-gray-700 hover:bg-gray-200"
          >
            <Users className="mr-3" size={20} />
            Clientes
            <ChevronDown className={`ml-auto transform ${clientesOpen ? 'rotate-180' : ''}`} size={16} />
          </button>
          {clientesOpen && (
            <div className="ml-7 mt-2">
              <button 
                onClick={() => onOptionSelect('nuevo-cliente')}
                className="block py-1 text-gray-600 hover:text-gray-800"
              >
                Agregar
              </button>
              <button 
                onClick={() => onOptionSelect('crud-clientes')}
                className="block py-1 text-gray-600 hover:text-gray-800"
              >
                Todos
              </button>
            </div>
          )}
        </div>
        <div className="px-4 py-2">
          <button 
            onClick={() => setMascotasOpen(!mascotasOpen)} 
            className="flex items-center w-full text-left text-gray-700 hover:bg-gray-200"
          >
            <PawPrint className="mr-3" size={20} />
            Mascotas
            <ChevronDown className={`ml-auto transform ${mascotasOpen ? 'rotate-180' : ''}`} size={16} />
          </button>
          {mascotasOpen && (
            <div className="ml-7 mt-2">
              <button className="block py-1 text-gray-600 hover:text-gray-800">Todas</button>
              <button className="block py-1 text-gray-600 hover:text-gray-800">Mis Mascotas</button>
            </div>
          )}
        </div>
        <div className="px-4 py-2">
          <button className="flex items-center text-gray-700 hover:bg-gray-200">
            <LogOut className="mr-3" size={20} />
            Cerrar Sesión
          </button>
        </div>
      </nav>
    </aside>
  );
}
