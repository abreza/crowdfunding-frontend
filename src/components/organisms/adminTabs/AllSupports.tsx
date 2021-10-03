import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from 'components/molecules/projectCard/ProjectCard';
import { FC } from 'react';

const AllSupports: FC = () => {
  const { data, isLoading } = { data: { supports: [] }, isLoading: false };

  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        spacing={3}
        sx={{ py: 1 }}>
        {isLoading ? (
          [1, 1].map((item: any, i: number) => (
            <Grid item key={i}>
              <ProjectCard />
            </Grid>
          ))
        ) : data?.supports?.length ? (
          data?.supports.map((item: any, i: number) => (
            <Grid item key={i}></Grid>
          ))
        ) : (
          <Grid item>
            <Typography align="center">
              متاسفانه تاکنون حمایتی انجام نگرفته‌است.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default AllSupports;
