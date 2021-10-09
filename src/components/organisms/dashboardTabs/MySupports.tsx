import { Button, Container, Grid, Typography, Stack } from '@mui/material';
import ProjectCard from 'src/components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import Link from 'next/link';

const MySupports: FC = () => {
  const { data, isLoading } = { data: { supports: [] }, isLoading: false };

  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        spacing={3}
        sx={{ py: 1 }}
      >
        {isLoading ? (
          [1, 1].map((item, i: number) => (
            <Grid item key={i}>
              <ProjectCard />
            </Grid>
          ))
        ) : data?.supports?.length ? (
          data?.supports.map((item, i: number) => (
            <Grid item key={i}></Grid>
          ))
        ) : (
          <Grid item>
            <Stack spacing={2}>
              <Typography align="center">
                متاسفانه تاکنون حمایتی انجام نداده‌اید.
              </Typography>
              <Link href="/project" passHref>
                <Button variant="outlined">بررسی پروژه‌ها</Button>
              </Link>
            </Stack>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default MySupports;
