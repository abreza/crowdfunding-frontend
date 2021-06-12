import { FC, useEffect } from 'react';
import { useAppDispatch } from 'configs/redux/reduxCustomHooks';
import LandingBanner from 'components/organisms/slider/LandingBanner';
import BestProjects from 'components/organisms/slider/BestProjects';
import ResponsiveAppBar from 'components/organisms/navbar/LandingNavbar';

type landingProps = {};

const Landing: FC<landingProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <ResponsiveAppBar />
      <LandingBanner />
      <BestProjects />
    </div>
  );
};

export default Landing;
