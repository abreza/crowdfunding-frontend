import {
  Button,
  Container,
  Grid,
  Box,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import { Sort as SortIcon } from '@material-ui/icons';
import ProjectCard from 'components/molecules/projectCard/ProjectCard';
import { RootState } from 'app/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Homepage from 'templates/Homepages';

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = () => {
  // @ts-ignore
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <Homepage>
      <Box pt={2}>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="flex-start">
            <Grid item>
              <TextField select value="all" variant="outlined">
                <MenuItem value="all">همه موضوعات</MenuItem>
                <MenuItem value="co">علوم کامپیوتر</MenuItem>
                <MenuItem value="ph">فیزیک</MenuItem>
                <MenuItem value="ma">ریاضی</MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField select value="all" variant="outlined">
                <MenuItem value="all">همه مراکز علمی</MenuItem>
                <MenuItem value="sh">دانشگاه شریف</MenuItem>
                <MenuItem value="te">دانشگاه تهران</MenuItem>
                <MenuItem value="el">دانشگاه علم‌و‌صنعت</MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField select value="all" variant="outlined">
                <MenuItem value="all">همه مراحل سرمایه‌گذاری</MenuItem>
                <MenuItem value="fu">در حال سرمایه‌گذاری</MenuItem>
                <MenuItem value="su">سرمایه‌گذاری موفق</MenuItem>
                <MenuItem value="fa">سرمایه‌گذاری نا‌موفق</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="flex-start">
            <Grid item>
              <SortIcon style={{ transform: 'scaleX(1)' }} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">مرتب‌سازی بر اساس:</Typography>
            </Grid>
            <Grid item>
              <Button color="primary">پر امتیازترین</Button>
            </Grid>
            <Grid item>
              <Button>جدید‌ترین</Button>
            </Grid>
            <Grid item>
              <Button>محبوب‌ترین</Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            spacing={3}
            style={{ padding: '10px 0' }}>
            {projects.map((item: any, i: number) => (
              <Grid item key={i}>
                <ProjectCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Homepage>
  );
};

export default Projects;
