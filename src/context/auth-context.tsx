import React, { createContext, useContext, useState } from "react";
import { User } from "../types/user";

// Define the context
interface AuthContextType {
  user: User | null; // Change 'any' to your user data type
  login: (user: { accessToken: string; user: User }) => void; // Change 'any' to your user data type
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    return storedUser ? JSON.parse(storedUser) : null;
  }); // Change 'any' to your user data type

  const login = (user: { accessToken: string; user: User }) => {
    setUser(user.user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
