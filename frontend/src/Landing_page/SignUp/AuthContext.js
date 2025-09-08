import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [flash, setFlash] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // ✅ reusable flash setter
  const showFlash = (message) => {
    setFlash(message);
    setTimeout(() => setFlash(""), 3000);
  };

  // ✅ accepts user + token separately
  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    showFlash(`Welcome ${userData.username || userData.name}!`);
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
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        flash,
        showFlash, // ✅ expose for Navbar use
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
