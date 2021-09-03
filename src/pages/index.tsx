import { FC, MutableRefObject, useRef, useEffect } from 'react';
import LandingBanner from 'components/organisms/slider/LandingBanner';
import BestProjects from 'components/organisms/slider/BestProjects';
import LandingSubscribe from 'components/organisms/landingSections/landingSubscrib/LandingSubscribe';
import { Divider } from '@material-ui/core';
import WhatIsCrowdfunding from 'components/organisms/landingSections/whatIsCrowdfunding/WhatIsCrowdfunding';
import Homepage from 'templates/Homepages';
import { useRouter } from 'next/router';
import axios from 'axios';
import { baseUrl } from 'app/services/baseQuery';
import { ProjectRo } from 'types/project';

type LandingProps = {
  projects: ProjectRo[];
};

const Landing: FC<LandingProps> = ({ projects }) => {
  const router = useRouter();
  const { sc } = router.query;

  const whatIsCrowdfunding = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (sc === 'what-is-crowdfunding') {
      whatIsCrowdfunding.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [sc]);

  return (
    <Homepage>
      <LandingBanner projects={projects} />
      <BestProjects projects={projects} />
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

export async function getStaticProps() {
  const res = await axios(baseUrl + 'project/');
  const { projects } = await res.data;

  return {
    props: {
      projects,
    },
    revalidate: 100,
  };
}

export default Landing;
