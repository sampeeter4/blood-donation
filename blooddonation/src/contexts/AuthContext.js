import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('bloodDonationUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (userData) => {
    const mockUser = {
      id: '123',
      name: 'Test User',
      email: userData.email,
      role: 'donor',
    };
    setUser(mockUser);
    localStorage.setItem('bloodDonationUser', JSON.stringify(mockUser));
    return mockUser; // Return user data instead of navigating
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bloodDonationUser');
    return true; // Return success instead of navigating
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};