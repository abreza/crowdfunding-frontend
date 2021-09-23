import { Container, Grid } from '@mui/material';
import ProjectCard from 'components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import { useGetMyProjectsQuery } from 'app/services/project';

const MyProjects: FC = () => {
  const { data, isLoading } = useGetMyProjectsQuery(null, {
    refetchOnMountOrArgChange: 30,
  });

  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        spacing={3}
        sx={{ py: 1 }}>
        {isLoading
          ? [1, 1].map((item: any, i: number) => (
              <Grid item key={i}>
                <ProjectCard />
              </Grid>
            ))
          : data?.projects.map((item: any, i: number) => (
              <Grid item key={i}>
                <ProjectCard item={item} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default MyProjects;
