import { Routes, Route, Link } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedLayout from "./components/ProtectedLayout";
import { Navigate } from "react-router";
import Properties from "./pages/Properties";

function App() {
  return (
    <div>
      <nav style={{ textAlign: "center", margin: "20px" }}>
        <Link to="/register" style={{ marginRight: "10px" }}>
          Registrarse
        </Link>
        <Link to="/login" style={{ marginRight: "10px" }}>
          Iniciar Sesión
        </Link>
        <Link to="/dashboard" style={{ marginRight: "10px" }}>
          Dashboard
        </Link>
        <Link to="/properties">Propiedades</Link>
      </nav>

      <Routes>
        {/* Rutas Públicas */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas Protegidas */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
        </Route>

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
