import { createContext } from 'react';

export const HomepageContext = createContext({
  openAuthDialog: (props?: { after: string }) => {},
});
