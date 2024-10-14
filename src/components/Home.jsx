import React from 'react';
import agregar from '../assets/images/agregar.png';
import todos from '../assets/images/todos.png';

const Home = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Barra de navegación superior */}
        <div className="flex justify-between items-center mb-8 w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Buscar a un cliente"
            className="border border-gray-400 p-2 rounded-lg w-80"
          />
          <input
            type="text"
            placeholder="Buscar a una mascota"
            className="border border-gray-400 p-2 rounded-lg w-80"
          />
        </div>

      {/* Cuadro de opciones principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img src={agregar} alt="Agregar" className="w-32 h-auto mb-4" />
          <button className="bg-teal-500 text-white py-3 px-6 w-full rounded-lg">AGREGAR</button>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img src={todos} alt="Todos" className="w-32 h-auto mb-4" />
          <button className="bg-purple-600 text-white py-3 px-6 w-full rounded-lg">TODOS</button>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img src={agregar} alt="Míos" className="w-32 h-auto mb-4" />
          <button className="bg-purple-600 text-white py-3 px-6 w-full rounded-lg">MÍOS</button>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img src={todos} alt="Cirugía" className="w-32 h-auto mb-4" />
          <button className="bg-purple-600 text-white py-3 px-6 w-full rounded-lg">CIRUGÍA</button>
        </div>
      </div>

      {/* Sección inferior con contadores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-2xl font-bold">CLIENTES REGISTRADOS</h6>
          <p className="text-gray-600 mt-2">89 Clientes en la base de datos</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-2xl font-bold">TUS CLIENTES</h6>
          <p className="text-gray-600 mt-2">3 Clientes en tu base de datos</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-2xl font-bold">MASCOTAS REGISTRADAS</h6>
          <p className="text-gray-600 mt-2">86 Mascotas en la base de datos</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
