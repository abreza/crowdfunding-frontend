import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  IconButton,
} from '@material-ui/core';
import {
  EvStation as EvStationIcon,
  AccessTime as AccessTimeIcon,
  Link as LinkIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Telegram as TelegramIcon,
} from '@material-ui/icons';
import { BorderLinearProgress } from 'components/molecules/projectCard/ProjectCard';
import { FC } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'assets/styles/gallery.css';

type ProjectStatusProps = {
  project: {
    id: string;
    name: string;
    subtitle: string;
    gallery: any[];
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  image: {
    width: '100%',
  },
  galleryPaper: {
    overflow: 'hidden',
  },
}));

const ProjectStatus: FC<ProjectStatusProps> = ({ project }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="stretch"
      direction="row"
      justify="space-between"
      spacing={3}>
      <Grid item sm={7} xs={12}>
        <Paper className={classes.galleryPaper}>
          <ImageGallery
            autoPlay={false}
            items={project.gallery.map((item) => ({
              ...item,
              originalHeight: 300,
              thumbnailHeight: 50,
            }))}
            lazyLoad={true}
            isRTL={true}
          />
        </Paper>
      </Grid>
      <Grid item sm={5} xs={12}>
        <Paper>
          <Box p={2}>
            <Typography variant="h3">۲۳ میلیون تومان</Typography>
            <Typography variant="h5" color="textSecondary">
              از ۵۰ میلیون تومان تامین شده است.
            </Typography>
            <Box my={2}>
              <BorderLinearProgress
                variant="determinate"
                value={50}
                color="secondary"
              />
            </Box>
            <Grid container alignItems="center" direction="row" spacing={2}>
              <Grid item>
                <EvStationIcon />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">۶ سرمایه‌گذار</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" direction="row" spacing={2}>
              <Grid item>
                <AccessTimeIcon />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" gutterBottom>
                  ۲۰ روز تا پایان سرمایه‌گذاری
                </Typography>
              </Grid>
            </Grid>
            <Box my={2}>
              <Button fullWidth variant="contained" color="primary">
                سرمایه‌گذاری
              </Button>
            </Box>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              direction="row">
              <Grid item>
                <IconButton>
                  <LinkIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <FacebookIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <TwitterIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <EmailIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <TelegramIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProjectStatus;
