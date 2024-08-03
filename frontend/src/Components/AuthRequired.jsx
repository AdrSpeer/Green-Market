import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const AuthRequired = ({ children }) => {
  const { token, setUser, setToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [token, navigate]);

  if (loading) return "Loading...";
  else return <>{children}</>;
};

export default AuthRequired;
