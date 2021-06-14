import {
  Button,
  Container,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import { Sort as SortIcon } from '@material-ui/icons';
import ProjectCard from 'components/molecules/projectCard/ProjectCard';
import { RootState } from 'configs/redux/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Homepage from 'templates/Homepages';

type ProjectsProps = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
}));

const Projects: FC<ProjectsProps> = () => {
  const classes = useStyles();

  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <Homepage>
      <div className={classes.root}>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            spacing={3}
            alignItems="center"
            justify="flex-start">
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
            spacing={3}
            alignItems="center"
            justify="flex-start">
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
            justify="space-around"
            spacing={3}
            style={{ padding: '10px 0' }}>
            {projects.map((item, i) => (
              <Grid item key={i}>
                <ProjectCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Homepage>
  );
};

export default Projects;
