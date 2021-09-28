import { FC } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/Navbar';
import Footer from 'components/organisms/footer/Footer';
import ProtectedPage from 'components/atoms/ProtectedPage';

type PanelProps = {};

const Panel: FC<PanelProps> = ({ children }) => {
  return (
    <ProtectedPage>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </ProtectedPage>
  );
};

export default Panel;
