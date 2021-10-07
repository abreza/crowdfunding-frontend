import { Container } from '@mui/material';
import { FC } from 'react';
import Homepage from 'src/templates/Homepages';
import ProjectHead from 'src/components/organisms/projectSections/ProjectHead';
import ProjectStatus from 'src/components/organisms/projectSections/ProjectStatus';
import ProjectTabs from 'src/components/organisms/projectSections/projectTabs/ProjectTabs';
import {
  initProjectContext,
  ProjectContext,
} from 'src/contexts/ProjectContext';
import axios from 'axios';
import { baseUrl } from 'src/config';
import { ProjectRo } from 'src/app/services/api.generated';

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
  let projects: ProjectRo[] = [];
  try {
    const res = await axios.get<{ projects: ProjectRo[] }>(
      baseUrl + 'project/'
    );
    projects = res.data.projects;
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
