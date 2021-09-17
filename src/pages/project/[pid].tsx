import { Container } from '@mui/material';
import { FC } from 'react';
import Homepage from 'templates/Homepages';
import ProjectHead from 'components/organisms/projectSections/ProjectHead';
import ProjectStatus from 'components/organisms/projectSections/ProjectStatus';
import ProjectTabs from 'components/organisms/projectSections/projectTabs/ProjectTabs';
import { ProjectContext } from 'context/ProjectContext';
import { ProjectRo } from 'types/project';
import axios from 'axios';
import { baseUrl } from 'config';

type ProjectProps = {
  project: ProjectRo;
};

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <Homepage>
      <ProjectContext.Provider value={{ ...project }}>
        <Container maxWidth="md" sx={{ py: 3 }}>
          <ProjectHead />
          <ProjectStatus />
          <ProjectTabs />
        </Container>
      </ProjectContext.Provider>
    </Homepage>
  );
};

export async function getStaticPaths() {
  const res = await axios(baseUrl + 'project/');
  const { projects } = await res.data;

  const paths = projects.map((project: ProjectRo) => ({
    params: { pid: project.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await axios(baseUrl + 'project/' + params.pid);
  const project = res.data;
  return {
    props: { project },
    revalidate: 60,
  };
}

export default Project;
