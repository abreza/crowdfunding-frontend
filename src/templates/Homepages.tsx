import { FC, useState } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/LandingNavbar';
import Footer from 'components/organisms/footer/Footer';
import AuthDialog from 'components/organisms/authDialog/AuthDialog';
import { HomepageContext } from 'context/HomepageContext';

type HomepageProps = {
  children: React.ReactNode;
};

const Homepage: FC<HomepageProps> = ({ children }) => {
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [afterAuth, setAfterAuth] = useState<string | undefined>('');

  return (
    <>
      <HomepageContext.Provider
        value={{
          openAuthDialog: ({ after }: { after: string | undefined }) => {
            setAfterAuth(after);
            setOpenAuthDialog(true);
          },
        }}>
        <ResponsiveAppBar />
        {children}
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
