import { FC, useState } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/Navbar';
import Footer from 'components/organisms/footer/Footer';
import AuthDialog from 'components/organisms/authDialog/AuthDialog';
import { HomepageContext } from 'contexts/HomepageContext';
import { Box } from '@mui/system';

type HomepageProps = {};

const Homepage: FC<HomepageProps> = ({ children }) => {
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [afterAuth, setAfterAuth] = useState<string>('');

  return (
    <>
      <HomepageContext.Provider
        value={{
          openAuthDialog: (props?: { after: string }) => {
            setAfterAuth(props?.after || '');
            setOpenAuthDialog(true);
          },
        }}>
        <ResponsiveAppBar />
        <Box sx={{ minHeight: '70vh' }}>{children}</Box>
        <Footer />
      </HomepageContext.Provider>
      <AuthDialog
        open={openAuthDialog}
        afterAuth={afterAuth}
        handleClose={() => setOpenAuthDialog(false)}
      />
    </>
  );
};

export default Homepage;
