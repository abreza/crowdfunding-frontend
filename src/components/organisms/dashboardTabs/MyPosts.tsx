import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import ProjectCard from 'src/components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import Link from 'next/link';

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
            <Stack spacing={2}>
              <Typography align="center">
                متاسفانه مطلبی ایجاد نکرده‌اید.
              </Typography>
              <Link href="/blog/new" passHref>
                <Button variant="outlined">ایجاد مطلب جدید</Button>
              </Link>
            </Stack>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default MyPosts;
