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
  const pid = /[^/]*$/.exec(router.asPath)?.[0];
  const [proj, setProj] = useState(project);

  useEffect(() => {
    if (!router.isFallback) {
      setProj(project);
    }
  }, [project]);

  return (
    <Homepage>
      <ProjectContext.Provider value={proj}>
        {router.isFallback && pid && (
          <FetchProject setProject={setProj} projectId={pid} />
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

export async function getServerSideProps({
  params: { pid },
}: {
  params: { pid: string };
}) {
  try {
    const res = await axios(baseUrl + 'project/' + pid);
    const project = res.data;
    return project
      ? {
          props: { project },
        }
      : { notFound: true };
  } catch (err) {
    // console.log(err);
  }
  return { notFound: true };
}

export default Project;
