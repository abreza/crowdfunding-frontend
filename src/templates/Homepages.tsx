import { FC, createContext, useState } from 'react';
import ResponsiveAppBar from 'components/organisms/navbar/LandingNavbar';
import Footer from 'components/organisms/footer/Footer';
import AuthDialog from 'components/molecules/authDialog/AuthDialog';

type HomepageProps = {
  children: React.ReactNode;
};

export const HomepageContext = createContext({
  openAuthDialog: () => {},
});

const Homepage: FC<HomepageProps> = ({ children }) => {
  const [openAuthDialog, setOpenAuthDialog] = useState(false);

  return (
    <>
      <HomepageContext.Provider
        value={{ openAuthDialog: () => setOpenAuthDialog(true) }}>
        <ResponsiveAppBar />
        {children}
        <Footer />
      </HomepageContext.Provider>
      <AuthDialog
        open={openAuthDialog}
        handleClose={() => setOpenAuthDialog(false)}
      />
    </>
  );
};

export default Homepage;
