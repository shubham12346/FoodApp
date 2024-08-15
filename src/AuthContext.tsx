import React, { useState, createContext, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";

// types.ts
export interface AuthState {
  username: string;
  isLoggedIn: boolean;
  roles: string[] | null;
  actions: string[];
  loginError: boolean;
}

export interface AuthContextType {
  state: AuthState;
  setLogin: (username: string) => void;
  setLogout: (navigate: (path: string) => void) => void;
}

const initialState: AuthState = {
  username: localStorage.getItem("login") ?? "",
  isLoggedIn: localStorage.getItem("login") ? true : false,
  roles: null,
  actions: [],
  loginError: false,
};
export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  setLogin: () => {},
  setLogout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AuthState>(initialState);
  const setLogin = (username: any) => {
    setState((prev) => ({ ...prev, isLoggedIn: true, username: username }));
  };

  const setLogout = (navigate: (path: string) => void) => {
    localStorage.removeItem("login");
    setState((prev) => ({ ...prev, isLoggedIn: false, username: "" }));
    navigate("/"); // Redirect to the desired route after logout
  };

  return (
    <AuthContext.Provider value={{ state, setLogin, setLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
