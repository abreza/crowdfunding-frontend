import { Button, Grid, Box } from '@mui/material';
import { Paper, Typography } from '@mui/material';
import LandingBannerItem from 'src/components/molecules/landingBannerItem/LandingBannerItem';
import { FC } from 'react';
import Link from 'next/link';
import CreateProjectButton from 'src/components/atoms/CreateProject';
import MuiCarousel from 'src/components/molecules/landingBannerItem/MuiCarousel';
import { ProjectRo } from 'src/app/services/api.generated';

const LandingBanner: FC<{ projects: ProjectRo[] }> = ({ projects }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Paper
        sx={{
          p: 4,
          position: { lg: 'absolute', md: 'relative' },
          right: 0,
          top: '20%',
          width: { lg: '40%', md: '100%' },
          borderRadius: { lg: '5px 0 0 5px', md: '0' },
          zIndex: 2,
        }}>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          sx={{ height: '100%' }}
          spacing={3}>
          <Grid item>
            <Typography variant="h2" gutterBottom>
              تامین‌مالی جمعی شریف
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              اینجا بهترین موقعیت برای معرفی و حمایت از دانش و تکنولوژیست.
            </Typography>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item>
              <Link href="/?sc=what-is-crowdfunding" passHref>
                <Button variant="outlined" color="primary">
                  مطالعه بیشتر
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <CreateProjectButton />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {projects.length > 0 && (
        <MuiCarousel>
          {projects.map((item: any, i: number) => (
            <LandingBannerItem key={i} item={item} />
          ))}
        </MuiCarousel>
      )}
    </Box>
  );
};

export default LandingBanner;
