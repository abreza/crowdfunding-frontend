import { FC, MutableRefObject, useRef, createContext, useEffect } from 'react';
import LandingBanner from 'components/organisms/slider/LandingBanner';
import BestProjects from 'components/organisms/slider/BestProjects';
import LandingSubscribe from 'components/organisms/landingSections/landingSubscrib/LandingSubscribe';
import { Divider } from '@material-ui/core';
import WhatIsCrowdfunding from 'components/organisms/landingSections/whatIsCrowdfunding/WhatIsCrowdfunding';
import Homepage from 'templates/Homepages';

type LandingProps = {
  location: any;
};

const scrollToWIC = () => '/?sc=what-is-crowdfunding';

export const LandingContext = createContext({ scrollToWIC });

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
      <LandingContext.Provider value={{ scrollToWIC }}>
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
      </LandingContext.Provider>
    </Homepage>
  );
};

export default Landing;
