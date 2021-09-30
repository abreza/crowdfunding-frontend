import { Container } from '@mui/material';
import { FC } from 'react';
import Homepage from 'templates/Homepages';
import ProjectHead from 'components/organisms/projectSections/ProjectHead';
import ProjectStatus from 'components/organisms/projectSections/ProjectStatus';
import ProjectTabs from 'components/organisms/projectSections/projectTabs/ProjectTabs';
import { initProjectContext, ProjectContext } from 'contexts/ProjectContext';
import { ProjectRo } from 'types/project';
import axios from 'axios';
import { baseUrl } from 'config';

type ProjectProps = {
  project?: ProjectRo;
};

const Project: FC<ProjectProps> = ({ project = initProjectContext }) => {
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
  let projects = [];
  try {
    const res = await axios(baseUrl + 'project/');
    projects = res.data;
  } catch (err) {
    console.log(err);
  }

  const paths = projects.map((project: ProjectRo) => ({
    params: { pid: project.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  try {
    const res = await axios(baseUrl + 'project/' + params.pid);
    const project = res.data;
    return {
      props: { project },
      revalidate: 30,
    };
  } catch (err) {
    console.log(err);
  }
  return {
    revalidate: 30,
  };
}

export default Project;
