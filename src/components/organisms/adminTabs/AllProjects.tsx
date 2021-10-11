import { Container, Grid, Typography } from '@mui/material';
import ProjectCard, {
  ProjectPermission,
} from 'src/components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import { useProjectControllerFindForAdminQuery } from 'src/app/services/api.generated';

const AllProjects: FC = () => {
  const { data, isLoading } = useProjectControllerFindForAdminQuery(
    undefined as void,
    {
      refetchOnMountOrArgChange: 5,
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
            <Typography align="center">
              متاسفانه پروژه‌ای ایجاد نشده است.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default AllProjects;
