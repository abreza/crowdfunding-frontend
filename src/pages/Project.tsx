import { Container, Box } from '@material-ui/core';
import { RootState } from 'configs/redux/store';
import { createContext, FC } from 'react';
import { useSelector } from 'react-redux';
import Homepage from 'templates/Homepages';
import ProjectHead from 'components/organisms/projectSections/ProjectHead';
import ProjectStatus from 'components/organisms/projectSections/ProjectStatus';
import ProjectTabs from 'components/organisms/projectSections/projectTabs/ProjectTabs';

type ProjectProps = {
  match: any;
};

export const ProjectContext = createContext({});

const Project: FC<ProjectProps> = ({ match }) => {
  const projectId = match?.params?.id;

  const project: {
    id: string;
    name: string;
    subtitle: string;
    gallery: any[];
  } = useSelector((state: RootState) =>
    state.projects.projects.find((project) => +project.id === +projectId)
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
