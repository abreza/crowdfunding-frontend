import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
} from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import ChunkedCarousel from 'components/molecules/chunkedCarousel/ChunkedCarousel';
import { RootState } from 'app/store';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  unaffected: {
    flip: false,
  },
}));

const BestProjects: FC<{}> = () => {
  const classes = useStyles();

  // @ts-ignore
  const projects = useSelector((state: RootState) => state.projects.projects);

  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex(index + 1);
  };

  const goBack = () => {
    setIndex(index - 1);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h3" component="h3" gutterBottom>
        برترین پروژه‌ها
      </Typography>

      <Grid container justifyContent="flex-end">
        <Grid item>
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={goNext}>
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>
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
