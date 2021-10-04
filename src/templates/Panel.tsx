import { FC } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/Navbar';
import Footer from 'components/organisms/footer/Footer';
import ProtectedPage from 'components/atoms/ProtectedPage';
import { Box } from '@mui/system';

type PanelProps = {
  onlyAdmin?: boolean;
};

const Panel: FC<PanelProps> = ({ children, onlyAdmin = false }) => {
  return (
    <ProtectedPage onlyAdmin={onlyAdmin}>
      <ResponsiveAppBar />
      <Box
        sx={{
          minHeight: '70vh',
          bgcolor: (theme) => theme.palette.background.default,
        }}>
        {children}
      </Box>
      <Footer />
    </ProtectedPage>
  );
};

export default Panel;
