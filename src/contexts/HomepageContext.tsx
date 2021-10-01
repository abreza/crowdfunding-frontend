import { AuthPageName } from 'components/organisms/authDialog/AuthDialog';
import { createContext } from 'react';

export type OpenAuthDialogProps = {
  afterAuth?: string;
  initPage?: AuthPageName;
};

export const HomepageContext = createContext({
  openAuthDialog: (props?: OpenAuthDialogProps) => {},
});
