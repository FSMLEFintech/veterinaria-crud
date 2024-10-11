import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Home, Users, Cat, LogOut } from 'lucide-react';
import '../styles/Dashboard.css';



const Dashboard = () => {
  const { userRole } = useAuth();  // Obtén el userRole del contexto

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <header className="bg-indigo-700 p-4 text-white flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center">
          <Cat className="mr-2" size={32} />
          AGATHA
        </h1>
        <div className="flex items-center">
          <button className="bg-white text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300">
            INGRESO
          </button>
          <button className="ml-2 bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition duration-300">
            SALIDA
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex">
        <nav className="w-64 bg-indigo-800 text-white min-h-screen p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center p-2 hover:bg-indigo-700 rounded transition">
                <Home className="mr-2" size={20} />
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 hover:bg-indigo-700 rounded transition">
                <Users className="mr-2" size={20} />
                Clientes
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 hover:bg-indigo-700 rounded transition">
                <Cat className="mr-2" size={20} />
                Mascotas
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 hover:bg-indigo-700 rounded transition">
                <LogOut className="mr-2" size={20} />
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h1 className="text-4xl font-semibold text-indigo-900 mb-8">
            Bienvenido, {userRole ? userRole : "!"}
          </h1>

          {/* Contenido adicional */}
          <div className="grid grid-cols-3 gap-8">
            {/* Aquí puedes añadir las tarjetas del dashboard */}
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-xl font-semibold mb-2">Clientes Registrados</h2>
              <p className="text-4xl font-bold">89</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-xl font-semibold mb-2">Tus Clientes</h2>
              <p className="text-4xl font-bold">3</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-xl font-semibold mb-2">Mascotas Registradas</h2>
              <p className="text-4xl font-bold">86</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
