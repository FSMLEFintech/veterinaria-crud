import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from './context/AuthContext'; // Para obtener el rol del usuario
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Pets from './pages/Pets';
import Sales from './pages/Sales';
import NotFound from './pages/NotFound';

const RoutesConfig = () => {
  const { userRole } = useAuth(); // Verificar el rol del usuario

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Mostrar páginas condicionalmente dependiendo del rol */}
        {userRole === 'coordinador' && (
          <>
            <Route path="/clients" element={<Clients />} />
            <Route path="/sales" element={<Sales />} />
          </>
        )}
        {userRole === 'vet' && <Route path="/pets" element={<Pets />} />}
        {/* Rol de "ser dios" (gerencia) */}
        {userRole === 'gerencia' && (
          <>
            <Route path="/clients" element={<Clients />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/pets" element={<Pets />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
