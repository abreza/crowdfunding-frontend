/* eslint-disable jsx-a11y/media-has-caption */
import { Box, IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import { FC, useRef, useState } from 'react';

const Player: FC<{ videoUrl: string }> = ({ videoUrl }) => {
  const video = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    if (!video.current) return;
    if (video.current.paused === true) {
      video.current.play();
      setPlaying(true);
    } else {
      video.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* TODO: don't display control */}
      <video
        ref={video}
        src={videoUrl}
        width="100%"
        height="100%"
        controls={playing}
      />
      <IconButton
        onClick={playVideo}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        size="large"
      >
        {playing ? (
          <Pause
            sx={{
              color: 'transparent',
              '&:hover': {
                color: 'white',
              },
              width: 50,
              height: 50,
            }}
            fontSize="large"
          />
        ) : (
          <PlayArrow
            sx={{
              color: 'white',
              width: 50,
              height: 50,
              transform: 'scaleX(1)',
            }}
            fontSize="large"
          />
        )}
      </IconButton>
    </>
  );
};

export const VideoPlayer: FC<any> = ({ videoUrl, originalHeight }) => {
  return (
    <Box sx={{ position: 'relative', height: originalHeight }}>
      <Player videoUrl={videoUrl} />
    </Box>
  );
};
