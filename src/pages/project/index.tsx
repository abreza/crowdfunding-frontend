import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { Sort as SortIcon } from '@mui/icons-material';
import ProjectCard from 'components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import Homepage from 'templates/Homepages';
import axios from 'axios';
import { baseUrl } from 'config';
import { ProjectRo } from 'types/project';

type ProjectsProps = {
  projects: ProjectRo[];
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <Homepage>
      <Container maxWidth="md" sx={{ pt: 2 }}>
        <Grid
          container
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="flex-start">
          <Grid item>
            <TextField select value="all">
              <MenuItem value="all">همه موضوعات</MenuItem>
              <MenuItem value="co">علوم کامپیوتر</MenuItem>
              <MenuItem value="ph">فیزیک</MenuItem>
              <MenuItem value="ma">ریاضی</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField select value="all">
              <MenuItem value="all">همه مراکز علمی</MenuItem>
              <MenuItem value="sh">دانشگاه شریف</MenuItem>
              <MenuItem value="te">دانشگاه تهران</MenuItem>
              <MenuItem value="el">دانشگاه علم‌و‌صنعت</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField select value="all">
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
            <SortIcon sx={{ transform: 'scaleX(1)' }} />
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
          sx={{ py: 1 }}>
          {projects.map((item: any, i: number) => (
            <Grid item key={i}>
              <ProjectCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Homepage>
  );
};

export async function getStaticProps() {
  const res = await axios(baseUrl + 'project/');
  const { projects } = await res.data;

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default Projects;
