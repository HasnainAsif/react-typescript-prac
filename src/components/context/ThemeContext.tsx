import React, { createContext } from 'react';
import { theme } from './theme';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme); // no need to add type because values are constant

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
