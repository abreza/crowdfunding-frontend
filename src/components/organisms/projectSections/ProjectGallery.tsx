import { Typography, Paper, Stack, Skeleton } from '@mui/material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { VideoPlayer } from 'src/components/atoms/VideoPlayer';
import videoImg from 'src/assets/images/video.png';
import Image from 'next/image';
import emptyFile from 'src/assets/images/empty_file.png';
import { Box } from '@mui/system';

type ProjectGalleryProps = {};

const ProjectGallery: FC<ProjectGalleryProps> = () => {
  const [originalHeight, setOriginalHeight] = useState(300);

  const { imageUrls } = useContext(ProjectContext);

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
    <Paper sx={{ overflow: 'hidden', height: '100%' }}>
      {imageUrls ? (
        imageUrls.length ? (
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
        )
      ) : (
        <Skeleton sx={{ height: '100%', transform: 'unset' }} />
      )}
    </Paper>
  );
};

export default ProjectGallery;
