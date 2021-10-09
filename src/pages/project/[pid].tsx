import { Container, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';
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
import {
  ProjectRo,
  useProjectControllerGetQuery,
} from 'src/app/services/api.generated';
import { useRouter } from 'next/router';
import ProjectGallery from 'src/components/organisms/projectSections/ProjectGallery';

const FetchProject: FC<{
  setProject: (project: ProjectRo) => void;
  projectId: string;
}> = ({ setProject, projectId }) => {
  const { data, isSuccess } = useProjectControllerGetQuery({ projectId });
  useEffect(() => {
    if (data && isSuccess) {
      setProject(data);
    }
  }, [data, isSuccess, setProject]);
  return <></>;
};

type ProjectProps = {
  project?: ProjectRo;
};

const Project: FC<ProjectProps> = ({ project = initProjectContext }) => {
  const router = useRouter();
  const { pid } = router.query;
  const [proj, setProj] = useState(project);

  useEffect(() => {
    if (!router.isFallback) {
      setProj(project);
    }
  }, [project]);

  return (
    <Homepage>
      <ProjectContext.Provider value={proj}>
        {router.isFallback && (
          <FetchProject setProject={setProj} projectId={pid as string} />
        )}
        <Container maxWidth="md" sx={{ py: 3 }}>
          <ProjectHead />
          <Grid
            container
            alignItems="stretch"
            direction="row"
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item sm={7} xs={12}>
              <ProjectGallery />
            </Grid>
            <Grid item sm={5} xs={12}>
              <ProjectStatus />
            </Grid>
          </Grid>
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

export async function getStaticProps({
  params: { pid },
}: {
  params: { pid: string };
}) {
  try {
    const res = await axios(baseUrl + 'project/' + pid);
    const project = res.data;
    return {
      props: { project },
      revalidate: 30,
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {},
    revalidate: 30,
  };
}

export default Project;
