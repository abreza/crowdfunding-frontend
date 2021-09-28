import { Edit } from '@mui/icons-material';
import { Avatar, IconButton, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import { useUploadAvatarMutation } from 'app/services/auth';
import { FC } from 'react';

export const ProfileAvatar: FC<{ editable?: boolean; src: string }> = ({
  editable = true,
  src,
}) => {
  const [uploadAvatar, { isLoading }] = useUploadAvatarMutation();

  const upload = async (image: File | undefined) => {
    if (!image) return;
    const formData = new FormData();
    formData.append('file', image);
    await uploadAvatar(formData);
  };

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
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="circular"
            width="100%"
            height="100%"
          />
        ) : (
          <Avatar sx={{ width: '100%', height: '100%' }} src={src} />
        )}
        {editable && (
          <IconButton
            sx={{ position: 'absolute', bottom: '0', right: '0' }}
            component="label">
            <Edit />
            <input
              type="file"
              hidden
              onChange={(e) => upload(e?.target?.files?.[0])}
              accept="image/*"
            />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};
