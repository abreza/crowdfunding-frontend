import { Container, Box } from '@material-ui/core';
import { RootState } from 'app/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Homepage from 'templates/Homepages';
import ProjectHead from 'components/organisms/projectSections/ProjectHead';
import ProjectStatus from 'components/organisms/projectSections/ProjectStatus';
import ProjectTabs from 'components/organisms/projectSections/projectTabs/ProjectTabs';
import { useRouter } from 'next/router';
import { ProjectContext } from 'contex/ProjectContext';

type ProjectProps = {};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  gallery: any[];
};

const Project: FC<ProjectProps> = () => {
  const router = useRouter();
  const { pid } = router.query;

  console.log(pid);

  const project: Project = useSelector((state: RootState) =>
    // @ts-ignore
    state.projects.projects.find((project) => +project.id === +pid)
  ) as any;

  return (
    <Homepage>
      <ProjectContext.Provider value={{ ...project }}>
        <Box py={3}>
          <Container maxWidth="md">
            <ProjectHead />
            <ProjectStatus />
            <ProjectTabs />
          </Container>
        </Box>
      </ProjectContext.Provider>
    </Homepage>
  );
};

export default Project;
