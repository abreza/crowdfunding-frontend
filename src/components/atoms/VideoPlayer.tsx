/* eslint-disable jsx-a11y/media-has-caption */
import { IconButton, makeStyles } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import { FC, useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  playerButtonIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  playerIcon: {
    color: 'white',
    width: 50,
    height: 50,
  },
  pauseIcon: {
    color: 'transparent',
    '&:hover': {
      color: 'white',
    },
    width: 50,
    height: 50,
  },
}));

const Player: FC<any> = ({ videoUrl }) => {
  const video = useRef(null) as any;
  const classes = useStyles();

  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
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
      <video
        ref={video}
        src={videoUrl}
        width="100%"
        height="100%"
        controls={playing}
      />
      <IconButton onClick={playVideo} className={classes.playerButtonIcon}>
        {playing ? (
          <Pause className={classes.pauseIcon} fontSize="large" />
        ) : (
          <PlayArrow
            className={classes.playerIcon}
            fontSize="large"
            style={{
              transform: 'scaleX(1)',
            }}
          />
        )}
      </IconButton>
    </>
  );
};

export const VideoPlayer: FC<any> = ({ videoUrl, originalHeight }) => {
  return (
    <div style={{ position: 'relative', height: originalHeight }}>
      <Player videoUrl={videoUrl} />
    </div>
  );
};
