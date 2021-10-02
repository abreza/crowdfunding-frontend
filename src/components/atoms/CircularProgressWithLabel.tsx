import {
  Typography,
  CircularProgress,
  CircularProgressProps,
} from '@mui/material';
import { Box } from '@mui/system';

export const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        mt: '-12px',
        ml: '-12px',
      }}>
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
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};
