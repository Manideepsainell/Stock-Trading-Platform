import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [flash, setFlash] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    // Auto-logout if no token found (or you can also check expiry if needed)
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    } else {
      handleLogout(); // force logout on refresh if no token
    }
  }, []);

  const showFlash = (message) => {
    setFlash(message);
    setTimeout(() => setFlash(""), 3000); // auto-clear after 3 sec
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    // if token comes from API, also store it here:
    // localStorage.setItem("token", userData.token);
    showFlash(`Welcome ${userData.name}!`);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
