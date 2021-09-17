import {
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  IconButton,
  LinearProgress,
} from '@mui/material';
import {
  EvStation as EvStationIcon,
  AccessTime as AccessTimeIcon,
  Link as LinkIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material';
import { ProjectContext } from 'context/ProjectContext';
import { FC, useContext, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type ProjectStatusProps = {};

const ProjectStatus: FC<ProjectStatusProps> = () => {
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
        <Paper sx={{ overflow: 'hidden' }}>
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
          <Box sx={{ p: 2 }}>
            <Typography variant="h3">۲۳ میلیون تومان</Typography>
            <Typography variant="h5" color="textSecondary">
              {`از ${totalBudget} تومان تامین شده است.`}
            </Typography>
            <LinearProgress
              sx={{ my: 2 }}
              variant="determinate"
              value={50}
              color="secondary"
            />
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ my: 2 }}>
              سرمایه‌گذاری
            </Button>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              direction="row">
              <Grid item>
                <IconButton size="large">
                  <LinkIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <FacebookIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <TwitterIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <EmailIcon style={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
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
