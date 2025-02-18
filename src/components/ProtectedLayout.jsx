import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router";
import { supabase } from "../supabaseClient";

const ProtectedLayout = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated);
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  if (loading) return <p>Cargando...</p>;

  // Si está autenticado, renderiza las rutas hijas
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;
