import { Button, Grid } from '@mui/material';
import { Paper, Typography } from '@mui/material';
import LandingBannerItem from 'components/molecules/landingBannerItem/LandingBannerItem';
import { FC } from 'react';
import Link from 'next/link';
import CreateProjectButton from 'components/atoms/CreateProject';
import { ProjectRo } from 'types/project';

const LandingBanner: FC<{ projects: ProjectRo[] }> = ({ projects }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Paper
        sx={{
          p: 4,
          position: { lg: 'absolute', md: 'relative' },
          right: 0,
          top: '20%',
          minHeight: '50%',
          width: { lg: '40%', md: '100%' },
          borderRadius: { lg: '5px 0 0 5px', md: '0' },
          zIndex: 2,
        }}>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          style={{ height: '100%' }}
          spacing={3}>
          <Grid item>
            <Typography variant="h1" gutterBottom>
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
      {/* {projects.length > 0 && (
        <Carousel
          fullHeightHover={true}
          autoPlay={false}
          indicatorIconButtonProps={{
            className: '',
            style: {},
          }}
          activeIndicatorIconButtonProps={
            {
              sx: {
                mr: 1,
                mb: 0.2,
                '& svg.MuiSvgIcon-root': {
                  transform: 'scale(1.5)',
                },
              },
            } as any
          }
          indicatorContainerProps={
            {
              sx: {
                height: 25,
                mt: -30,
              },
            } as any
          }>
          {projects.map((item: any, i: number) => (
            <LandingBannerItem key={i} item={item} />
          ))}
        </Carousel>
      )} */}
    </div>
  );
};

export default LandingBanner;
