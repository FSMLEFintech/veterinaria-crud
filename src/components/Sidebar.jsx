import React from 'react';
import { Home, Users, Cat, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-full shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <Cat className="mr-2" />
          AGATHA
        </h2>
        <nav className="space-y-2">
          <a href="/" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
            <Home className="mr-2" /> Inicio
          </a>
          <a href="/clients" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
            <Users className="mr-2" /> Clientes
          </a>
          <a href="/pets" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
            <Cat className="mr-2" /> Mascotas
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
            <LogOut className="mr-2" /> Cerrar Sesión
          </a>
        </nav>
      </div>
    </div>
  );
}
