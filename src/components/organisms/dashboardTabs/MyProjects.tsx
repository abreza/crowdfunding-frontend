import { Container, Grid, Typography, Stack } from '@mui/material';
import ProjectCard, {
  ProjectPermission,
} from 'src/components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import CreateProjectButton from 'src/components/atoms/CreateProject';
import { useProjectControllerFindMyProjectsQuery } from 'src/app/services/api';

const MyProjects: FC = () => {
  const { data, isLoading } = useProjectControllerFindMyProjectsQuery(
    undefined as void,
    {
      refetchOnMountOrArgChange: 30,
    }
  );

  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        spacing={1}
        sx={{ py: 1 }}
      >
        {isLoading ? (
          [1, 1].map((item: any, i: number) => (
            <Grid item key={i}>
              <ProjectCard />
            </Grid>
          ))
        ) : data?.projects?.length ? (
          data?.projects.map((item: any, i: number) => (
            <Grid item key={i}>
              <ProjectCard
                item={item}
                permissionMode={ProjectPermission.ADMIN}
              />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Stack spacing={2}>
              <Typography align="center">
                متاسفانه مطلبی ایجاد نکرده‌اید.
              </Typography>
              <CreateProjectButton variant="outlined" />
            </Stack>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default MyProjects;
