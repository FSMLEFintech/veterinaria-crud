import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import NuevoClienteForm from "./NuevoClienteForm"; // Importa el formulario de cliente
import CrudClientes from "./CrudClientes"; // Importa el CRUD de clientes
import Home from "./Home";

const MainContent = ({ selectedOption }) => {
  const { user } = useAuth(); // Usamos el contexto de autenticación

  // Función para renderizar el contenido dinámico según el rol del usuario
  const renderDashboardContent = () => {
    // Si el usuario no tiene rol o no está autenticado, mostramos Home
    if (!user || !user.role) {
      return <Home />; // Vista predeterminada para usuarios no autenticados o sin rol
    }

    // Control del contenido basado en el rol del usuario
    switch (user.role) {
      case "admin":
        return (
          <>
            <div className="grid grid-cols-3 gap-8">
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

            {/* Contenido dinámico basado en la opción seleccionada */}
            {selectedOption === "nuevo-cliente" && (
              <div>
                <NuevoClienteForm />
              </div>
            )}
            {selectedOption === "crud-clientes" && (
              <div>
                <CrudClientes />
              </div>
            )}
          </>
        );
      case "vet":
        return <h1 className="text-4xl">Dashboard de Veterinario</h1>;
      case "cliente":
        return <h1 className="text-4xl">Dashboard de Cliente</h1>;
      case "coordinador":
        return <h1 className="text-4xl">Dashboard de Coordinador</h1>;
      case "chofer":
        return <h1 className="text-4xl">Dashboard de Chofer</h1>;
      default:
        return <Home />; // Fallback a Home para roles desconocidos
    }
  };

  return (
    <main className="flex-1 p-10">
      <h1 className="text-4xl font-semibold text-indigo-900 mb-8">
        Bienvenido, {user?.role || "Usuario"} {/* Fallback si no hay rol */}
      </h1>
      {renderDashboardContent()} {/* Renderizamos el contenido dinámico */}
    </main>
  );
};

export default MainContent;
