import { FC } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/Navbar';
import Footer from 'components/organisms/footer/Footer';
import ProtectedPage from 'components/atoms/ProtectedPage';
import { Box } from '@mui/system';

type PanelProps = {};

const Panel: FC<PanelProps> = ({ children }) => {
  return (
    <ProtectedPage>
      <ResponsiveAppBar />
      <Box sx={{ minHeight: '70vh' }}>{children}</Box>
      <Footer />
    </ProtectedPage>
  );
};

export default Panel;
