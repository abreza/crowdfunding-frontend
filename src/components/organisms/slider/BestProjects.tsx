import { Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import ChunkedCarousel from 'components/molecules/chunkedCarousel/ChunkedCarousel';
import { FC, useState } from 'react';
import Link from 'next/link';
import { ProjectRo } from 'types/project';

const BestProjects: FC<{ projects: ProjectRo[] }> = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex(index + 1);
  };

  const goBack = () => {
    setIndex(index - 1);
  };

  return (
    <Container sx={{ p: 3 }}>
      <Typography variant="h3" component="h3" gutterBottom>
        برترین پروژه‌ها
      </Typography>

      <Grid container justifyContent="flex-end" sx={{ minHeight: 250 }}>
        <Grid item>
          <IconButton onClick={goBack} size="large">
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={goNext} size="large">
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>
      {projects.length > 0 && (
        <ChunkedCarousel
          items={projects}
          rtl
          setting={{
            fullHeightHover: true,
            autoPlay: false,
            indicators: false,
            navButtonsAlwaysInvisible: true,
            animation: 'slide',
          }}
          index={index}
        />
      )}

      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Link href="/project" passHref>
            <Button variant="contained" color="primary">
              مشاهده همه
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BestProjects;
