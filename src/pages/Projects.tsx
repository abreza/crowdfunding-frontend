import {
  Container,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { FC } from 'react';
import Homepage from 'templates/Homepages';

type ProjectsProps = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
}));

const Projects: FC<ProjectsProps> = () => {
  const classes = useStyles();

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
        </Container>
      </div>
    </Homepage>
  );
};

export default Projects;
