import { FC, MutableRefObject, useRef, useEffect } from 'react';
import LandingBanner from 'src/components/organisms/slider/LandingBanner';
import BestProjects from 'src/components/organisms/slider/BestProjects';
import LandingSubscribe from 'src/components/organisms/landingSections/landingSubscribe/LandingSubscribe';
import { Divider } from '@mui/material';
import WhatIsCrowdfunding from 'src/components/organisms/landingSections/whatIsCrowdfunding/WhatIsCrowdfunding';
import Homepage from 'src/templates/Homepages';
import { useRouter } from 'next/router';
import axios from 'axios';
import { baseUrl } from 'src/config';
import { Box } from '@mui/system';
import { ProjectRo } from 'src/app/services/api.generated';

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
        sx={{ scrollMarginTop: 50, scrollSnapMargin: 50 }}
      >
        <WhatIsCrowdfunding />
      </Box>
    </Homepage>
  );
};

export async function getStaticProps() {
  let projects: ProjectRo[] = [];
  try {
    const res = await axios.get<{ projects: ProjectRo[] }>(
      baseUrl + 'project/'
    );
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
