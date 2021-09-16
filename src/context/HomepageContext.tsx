import { createContext } from 'react';

export const HomepageContext = createContext({
  openAuthDialog: ({ after }: { after: string }) => {},
});
