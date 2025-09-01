import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [flash, setFlash] = useState("");

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (savedUser && token) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error("Failed to parse user from localStorage:", err);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
      }
    }
    // Do NOT auto-logout immediately; let login handle invalid token later
  }, []);

  const showFlash = (message) => {
    setFlash(message);
    setTimeout(() => setFlash(""), 3000); // auto-clear after 3 sec
  };

  const login = (userData, token) => {
    // Ensure userData has "name" key for flash and navbar
    const mappedUser = {
      id: userData.id,
      email: userData.email,
      name: userData.name || userData.username, // fallback to username
    };

    setUser(mappedUser);
    localStorage.setItem("user", JSON.stringify(mappedUser));
    if (token) localStorage.setItem("token", token);

    showFlash(`Welcome ${mappedUser.name}!`);
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
