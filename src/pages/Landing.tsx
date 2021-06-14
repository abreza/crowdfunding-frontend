import { FC, MutableRefObject, useRef, useEffect } from 'react';
import LandingBanner from 'components/organisms/slider/LandingBanner';
import BestProjects from 'components/organisms/slider/BestProjects';
import LandingSubscribe from 'components/organisms/landingSections/landingSubscrib/LandingSubscribe';
import { Divider } from '@material-ui/core';
import WhatIsCrowdfunding from 'components/organisms/landingSections/whatIsCrowdfunding/WhatIsCrowdfunding';
import Homepage from 'templates/Homepages';

type LandingProps = {
  location: any;
};

const Landing: FC<LandingProps> = ({ location }) => {
  const whatIsCrowdfunding = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const sc = new URLSearchParams(location?.search).get('sc');
    if (sc === 'what-is-crowdfunding') {
      whatIsCrowdfunding.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [location]);

  return (
    <Homepage>
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
    </Homepage>
  );
};

export default Landing;
