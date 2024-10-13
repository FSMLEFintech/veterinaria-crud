import React, { useState } from 'react';
import NuevoClienteForm from './NuevoClienteForm';

export default function Crud() {
  const [clientes, setClientes] = useState([]);

  const handleClientAdded = (newClient) => {
    setClientes((prevClientes) => [...prevClientes, newClient]);
  };

  const handleDelete = (index) => {
    const updatedClientes = clientes.filter((_, i) => i !== index);
    setClientes(updatedClientes);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lista de Clientes</h1>
      <NuevoClienteForm onClientAdded={handleClientAdded} />

      <ul className="mt-6">
        {clientes.map((client, index) => (
          <li key={index} className="bg-white p-4 shadow-md mb-4 rounded-md flex justify-between items-center">
            <span>{client.nombre} - {client.telefono}</span>
            <button 
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDelete(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
