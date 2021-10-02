import { CheckCircleOutline } from '@mui/icons-material';
import {
  Typography,
  CircularProgress,
  CircularProgressProps,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { Box } from '@mui/system';
import { FC } from 'react';

export const CircularProgressWithLabel: FC<
  CircularProgressProps & { value: number; finished: boolean }
> = ({ value, finished = false, ...props }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}>
      {finished ? (
        <CheckCircleOutline
          sx={{
            color: green[500],
            background: '#ccccccaa',
            borderRadius: '50%',
          }}
          fontSize="large"
        />
      ) : (
        <>
          <CircularProgress
            variant="determinate"
            {...props}
            sx={{ borderRadius: '50%', background: '#ccccccaa' }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Typography variant="caption" color="primary">{`${Math.round(
              value
            )}%`}</Typography>
          </Box>
        </>
      )}
    </Box>
  );
};
