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
import { VideoPlayer } from 'components/atoms/VideoPlayer';
import { BorderLinearProgress } from 'components/molecules/projectCard/ProjectCard';
import { ProjectContext } from 'contex/ProjectContext';
import { FC, useContext, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type ProjectStatusProps = {};

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

const ProjectStatus: FC<ProjectStatusProps> = () => {
  const classes = useStyles();

  const [originalHeight, setOriginalHeight] = useState(300);

  const { imageUrls, budgets } = useContext(ProjectContext);

  const totalBudget = budgets.reduce(
    (partial_sum, budget) => partial_sum + budget.value,
    0
  );

  return (
    <Grid
      container
      alignItems="stretch"
      direction="row"
      justifyContent="space-between"
      spacing={3}>
      <Grid item sm={7} xs={12}>
        <Paper className={classes.galleryPaper}>
          <ImageGallery
            autoPlay={false}
            items={
              imageUrls?.map((img) => ({
                original: img,
                thumbnail: img,
                originalHeight: originalHeight,
                thumbnailHeight: 50,
                // renderItem: item?.itemType === 'video' && VideoPlayer,
              })) || []
            }
            onScreenChange={(fullscreen) =>
              // @ts-ignore
              setOriginalHeight(!fullscreen && 300)
            }
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
              {`از ${totalBudget} تومان تامین شده است.`}
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
              justifyContent="space-between"
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
