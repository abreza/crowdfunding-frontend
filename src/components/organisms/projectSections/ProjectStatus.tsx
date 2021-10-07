import {
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  IconButton,
  LinearProgress,
  Stack,
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
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { VideoPlayer } from 'src/components/atoms/VideoPlayer';
import videoImg from 'src/assets/images/video.png';
import Image from 'next/image';
import emptyFile from 'src/assets/images/empty_file.png';

type ProjectStatusProps = {};

const ProjectStatus: FC<ProjectStatusProps> = () => {
  const [originalHeight, setOriginalHeight] = useState(300);

  const { imageUrls = [], budgets = [] } = useContext(ProjectContext);

  const totalBudget = budgets.reduce(
    (partial_sum, budget) => partial_sum + budget.value,
    0
  );

  const isVideo = (url: string) => url.endsWith('.mp4');

  const getImageGalleryItem = (url: string) => {
    if (!isVideo(url)) {
      return {
        original: url,
        thumbnail: url,
        originalHeight,
        thumbnailHeight: 50,
      };
    } else {
      return {
        original: videoImg,
        thumbnail: videoImg,
        originalHeight,
        thumbnailHeight: 50,
        videoUrl: url,
        renderItem: url.endsWith('.mp4') && (VideoPlayer as any),
      };
    }
  };

  return (
    <Grid
      container
      alignItems="stretch"
      direction="row"
      justifyContent="space-between"
      spacing={3}>
      <Grid item sm={7} xs={12}>
        <Paper sx={{ overflow: 'hidden', height: '100%' }}>
          {imageUrls?.length ? (
            <ImageGallery
              autoPlay={false}
              items={imageUrls?.map(getImageGalleryItem) || []}
              onScreenChange={(fullscreen) =>
                // @ts-ignore
                setOriginalHeight(!fullscreen && 300)
              }
              lazyLoad={true}
              isRTL={true}
            />
          ) : (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ height: '100%', pb: 1 }}
              spacing={3}>
              <Box
                sx={{
                  width: { sm: '30%', xs: '50%' },
                  position: 'relative',
                }}>
                <Image
                  src={emptyFile}
                  alt="empty"
                  layout="responsive"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography align="center" variant="h6">
                عکس یا فیلمی موجود نیست!
              </Typography>
            </Stack>
          )}
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
                  <LinkIcon sx={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <FacebookIcon sx={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <TwitterIcon sx={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <EmailIcon sx={{ transform: 'scaleX(1)' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <TelegramIcon sx={{ transform: 'scaleX(1)' }} />
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
