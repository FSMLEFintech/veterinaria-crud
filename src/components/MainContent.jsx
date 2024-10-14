import React from "react";
import NuevoClienteForm from "./NuevoClienteForm"; // Importa el formulario de cliente
import CrudClientes from "./CrudClientes"; // Importa el CRUD de clientes
import Home from "./Home";

const MainContent = ({ selectedOption }) => {
  
  // Función para renderizar el contenido dinámico según la opción seleccionada
  const renderContent = () => {
    switch (selectedOption) {
      case "nuevo-cliente":
        return <NuevoClienteForm />;
      case "crud-clientes":
        return <CrudClientes />;
      case "todas-mascotas":
        return <div>Todas las Mascotas</div>; // Aquí podrías agregar tu componente de mascotas
      case "mis-mascotas":
        return <div>Mis Mascotas</div>; // Aquí podrías agregar tu componente de mascotas
      default:
        return <Home />;
    }
  };

  return (
    <main className="flex-1 p-10">
      {renderContent()}
    </main>
  );
};

export default MainContent;
