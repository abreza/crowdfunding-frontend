import { Button, Container, Grid, Typography } from '@mui/material';
import ProjectCard from 'components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import { Add } from '@mui/icons-material';

const MyPosts: FC = () => {
  const { data, isLoading } = { data: { posts: [] }, isLoading: false };

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
        ) : data?.posts?.length ? (
          data?.posts.map((item: any, i: number) => <Grid item key={i}></Grid>)
        ) : (
          <Grid item>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              direction="column"
              spacing={2}>
              <Grid item>
                <Typography align="center">
                  متاسفانه مطلبی ایجاد نکرده‌اید.
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  ایجاد مطلب جدید
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default MyPosts;
