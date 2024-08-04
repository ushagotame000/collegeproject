import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const token = localStorage.getItem('token');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); 
  const verifyToken = useCallback(async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-token', { token });
      setIsAuthenticated(response.data.valid);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  }, [token]); 
  useEffect(() => {
    verifyToken();
  }, [verifyToken]); 

  if (isAuthenticated === null) {
    return <div>Loading...</div>; 
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
