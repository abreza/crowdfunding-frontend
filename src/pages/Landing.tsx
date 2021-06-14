import { FC, MutableRefObject, useRef, createContext } from 'react';
import LandingBanner from 'components/organisms/slider/LandingBanner';
import BestProjects from 'components/organisms/slider/BestProjects';
import LandingSubscribe from 'components/organisms/landingSections/landingSubscrib/LandingSubscribe';
import { Divider } from '@material-ui/core';
import WhatIsCrowdfunding from 'components/organisms/landingSections/whatIsCrowdfunding/WhatIsCrowdfunding';
import Homepage from 'templates/Homepages';

type LandingProps = {};

export const LandingContext = createContext({
  scrollToWIC: () => {},
});

const Landing: FC<LandingProps> = () => {
  const whatIsCrowdfunding = useRef() as MutableRefObject<HTMLDivElement>;
  const scrollToWIC = () => {
    whatIsCrowdfunding.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

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
