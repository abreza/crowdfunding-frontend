import { FC } from 'react';
import LandingBanner from 'components/organisms/slider/LandingBanner';
import BestProjects from 'components/organisms/slider/BestProjects';
import ResponsiveAppBar from 'components/organisms/navbar/LandingNavbar';
import LandingSubscribe from 'components/organisms/landingSections/landingSubscrib/LandingSubscribe';
import { Divider } from '@material-ui/core';
import WhatIsCrowdfunding from 'components/organisms/landingSections/whatIsCrowdfunding/WhatIsCrowdfunding';

type LandingProps = {};

const Landing: FC<LandingProps> = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <LandingBanner />
      <BestProjects />
      <Divider />
      <LandingSubscribe />
      <Divider />
      <WhatIsCrowdfunding />
    </div>
  );
};

export default Landing;
