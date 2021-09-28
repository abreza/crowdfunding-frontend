import { FC, MutableRefObject, useRef, useEffect } from 'react';
import LandingBanner from 'components/organisms/slider/LandingBanner';
import BestProjects from 'components/organisms/slider/BestProjects';
import LandingSubscribe from 'components/organisms/landingSections/landingSubscrib/LandingSubscribe';
import { Divider } from '@mui/material';
import WhatIsCrowdfunding from 'components/organisms/landingSections/whatIsCrowdfunding/WhatIsCrowdfunding';
import Homepage from 'templates/Homepages';
import { useRouter } from 'next/router';
import axios from 'axios';
import { baseUrl } from 'config';
import { ProjectRo } from 'types/project';
import { Box } from '@mui/system';

type LandingProps = {
  projects: ProjectRo[];
};

const Landing: FC<LandingProps> = ({ projects = [] }) => {
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
      <Box
        ref={whatIsCrowdfunding}
        sx={{ scrollMarginTop: 50, scrollSnapMargin: 50 }}>
        <WhatIsCrowdfunding />
      </Box>
    </Homepage>
  );
};

export async function getStaticProps() {
  let projects = [];
  try {
    const res = await axios(baseUrl + 'project/');
    projects = res.data.projects;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default Landing;
