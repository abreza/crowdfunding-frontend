import { FC, createContext } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/LandingNavbar';
import Footer from 'components/organisms/footer/Footer';

type PanelProps = {
  children: React.ReactNode;
};

export const PanelContext = createContext({
  openAuthDialog: () => {},
});

const Panel: FC<PanelProps> = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
};

export default Panel;
