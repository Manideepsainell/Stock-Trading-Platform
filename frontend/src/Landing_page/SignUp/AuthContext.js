import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [flash, setFlash] = useState("");

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");

    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    } else {
      handleLogout();
    }
  }, []);

  const showFlash = (message) => {
    setFlash(message);
    setTimeout(() => setFlash(""), 3000);
  };

  const login = (userData) => {
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("token", userData.token || "");
    showFlash(`Welcome ${userData.name}!`);
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };

  const logout = () => {
    handleLogout();
    showFlash("You are logged out!");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, flash }}>
      {children}
    </AuthContext.Provider>
  );
};
