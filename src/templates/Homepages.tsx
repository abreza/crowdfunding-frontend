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
