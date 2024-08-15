import React, { useState, createContext, ReactNode, useContext } from "react";

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
  setLogout: () => void;
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

  const setLogout = () => {
    setState((prev) => ({ ...prev, isLoggedIn: false }));
    window.location.href = "/login";
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
