import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from 'src/components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import { useProjectControllerFindForAdminQuery } from 'src/app/services/api.generated';

const AllProjects: FC = () => {
  const { data, isLoading } = useProjectControllerFindForAdminQuery();

  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        spacing={2}
        sx={{ py: 1 }}>
        {isLoading ? (
          [1, 1].map((item: any, i: number) => (
            <Grid item key={i}>
              <ProjectCard />
            </Grid>
          ))
        ) : data?.projects?.length ? (
          data?.projects.map((item: any, i: number) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <ProjectCard item={item} />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography align="center">
              متاسفانه مطلبی ایجاد نکرده‌اید.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default AllProjects;
