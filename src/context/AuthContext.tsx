import React, { useState } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  signInSucess: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signInSucess = () => {
    setIsAuthenticated(true);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, signInSucess }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return React.useContext(AuthContext) as AuthContextType;
};

export default AuthContext;
