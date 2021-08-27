import { FC } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/LandingNavbar';
import Footer from 'components/organisms/footer/Footer';
import ProtectedPage from 'components/atoms/ProtectedPage';

type PanelProps = {
  children: React.ReactNode;
};

const Panel: FC<PanelProps> = ({ children }) => {
  return (
    <>
      <ProtectedPage />
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
};

export default Panel;
