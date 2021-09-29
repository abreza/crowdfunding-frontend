import { createContext } from 'react';

export const DispatchContext = createContext((mode: string): void => {
  throw new Error('Forgot to wrap component in `ThemeProvider`');
});
