import { FC, useState } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/Navbar';
import Footer from 'components/organisms/footer/Footer';
import AuthDialog from 'components/organisms/authDialog/AuthDialog';
import { HomepageContext, OpenAuthDialogProps } from 'contexts/HomepageContext';
import { Box } from '@mui/system';

type HomepageProps = {};

const Homepage: FC<HomepageProps> = ({ children }) => {
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [authProps, setAuthProps] = useState<OpenAuthDialogProps | undefined>();

  return (
    <>
      <HomepageContext.Provider
        value={{
          openAuthDialog: (props?: OpenAuthDialogProps) => {
            setAuthProps(props);
            setOpenAuthDialog(true);
          },
        }}>
        <ResponsiveAppBar />
        <Box
          sx={{
            minHeight: '70vh',
            bgcolor: (theme) => theme.palette.background.default,
          }}>
          {children}
        </Box>
        <Footer />
      </HomepageContext.Provider>
      <AuthDialog
        open={openAuthDialog}
        {...authProps}
        handleClose={() => setOpenAuthDialog(false)}
      />
    </>
  );
};

export default Homepage;
