import React, { createContext } from 'react';

export const ThemeContext = createContext('light');

export default ({ children }) => {

  return (
    <ThemeContext.Provider
      value={{
        theme: 'light',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
