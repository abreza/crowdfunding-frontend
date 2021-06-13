import { FC, MutableRefObject, useRef, createContext, useState } from 'react';
import LandingBanner from 'components/organisms/slider/LandingBanner';
import BestProjects from 'components/organisms/slider/BestProjects';
import ResponsiveAppBar from 'components/organisms/navbar/LandingNavbar';
import LandingSubscribe from 'components/organisms/landingSections/landingSubscrib/LandingSubscribe';
import { Divider } from '@material-ui/core';
import WhatIsCrowdfunding from 'components/organisms/landingSections/whatIsCrowdfunding/WhatIsCrowdfunding';
import Footer from 'components/organisms/footer/Footer';
import AuthDialog from 'components/molecules/authDialog/AuthDialog';

type LandingProps = {};

export const LandingContext = createContext({
  scrollToWIC: () => {},
  openAuthDialog: () => {},
});

const Landing: FC<LandingProps> = () => {
  const whatIsCrowdfunding = useRef() as MutableRefObject<HTMLDivElement>;
  const scrollToWIC = () => {
    whatIsCrowdfunding.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const [openAuthDialog, setOpenAuthDialog] = useState(false);

  return (
    <div>
      <LandingContext.Provider
        value={{ scrollToWIC, openAuthDialog: () => setOpenAuthDialog(true) }}>
        <ResponsiveAppBar />
        <LandingBanner />
        <BestProjects />
        <Divider />
        <LandingSubscribe />
        <Divider />
        <div
          ref={whatIsCrowdfunding}
          style={{ scrollMarginTop: 50, scrollSnapMargin: 50 }}>
          <WhatIsCrowdfunding />
        </div>
        <Footer />
      </LandingContext.Provider>
      <AuthDialog
        open={openAuthDialog}
        handleClose={() => setOpenAuthDialog(false)}
      />
    </div>
  );
};

export default Landing;
