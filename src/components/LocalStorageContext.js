import React, { createContext } from 'react';

export const LocalStorageContext = createContext();


export function LocalStorageProvider({ children }) {
  const storeUserRegistrationData = (data) => {
    localStorage.setItem('userRegistrationData', JSON.stringify(data));
  };

  const isLoggedIn = true// Burada kullanıcı oturum durumunu belirleyen bir mantık yapısını ekleyin

  return (
    <LocalStorageContext.Provider value={{ storeUserRegistrationData, isLoggedIn }}>
      {children}
    </LocalStorageContext.Provider>
  )
}

