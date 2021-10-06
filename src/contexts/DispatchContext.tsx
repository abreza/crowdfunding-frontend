import { createContext } from 'react';

export const DispatchContext = createContext({
  themeMode: 'light',
  setThemeMode: (themeMode: string) => {},
});
