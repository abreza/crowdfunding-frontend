import { Edit } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { Box } from '@mui/system';

export const ProfileAvatar = () => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        position: 'relative',
        width: { sm: '80%', xs: '60%' },
        mx: 'auto',
      }}>
      <Box
        sx={{
          mt: '100%',
        }}></Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Avatar sx={{ width: '100%', height: '100%' }} />
        <IconButton sx={{ position: 'absolute', bottom: '0', right: '0' }}>
          <Edit />
        </IconButton>
      </Box>
    </Box>
  );
};
