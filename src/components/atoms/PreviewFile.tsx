import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Cancel as CancelIcon } from '@mui/icons-material';
import { CircularProgressWithLabel } from 'components/atoms/CircularProgressWithLabel';
import { ExtendedFile } from 'pages/new';
import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/system';

export const PreviewFile: FC<{ extendedFile: ExtendedFile; removeFile?: any }> =
  ({ extendedFile, removeFile }) => {
    const [previewImage, setPreviewImage] = useState<string | undefined>();

    useEffect(() => {
      if (!extendedFile.file) {
        setPreviewImage(undefined);
        return;
      }
      const pre = window.URL.createObjectURL(
        new Blob([extendedFile.file], { type: 'image/png' })
      );
      setPreviewImage(pre);
    }, [extendedFile]);

    return (
      <Box key={extendedFile.id} sx={{ width: 150, mx: 1 }}>
        <Box
          sx={{
            display: 'inline-flex',
            borderRadius: 2,
            border: '1px solid #eaeaea',
            maxWidth: '100%',
            height: 140,
            p: 0.5,
            boxSizing: 'border-box',
            position: 'relative',
          }}>
          {removeFile && (
            <IconButton
              onClick={() => removeFile(extendedFile.id)}
              sx={{ position: 'absolute', top: -12, left: -12 }}
              color="error">
              <CancelIcon />
            </IconButton>
          )}
          <Box
            sx={{
              display: 'flex',
              minWidth: 0,
              overflow: 'hidden',
              borderRadius: 2,
            }}>
            <img
              src={previewImage}
              style={{
                display: 'block',
                width: 'auto',
                height: '100%',
              }}
              alt={extendedFile?.file?.name}
            />
            {!extendedFile.url && (
              <CircularProgressWithLabel
                value={extendedFile.progress ? extendedFile.progress : 0}
                size={40}
              />
            )}
          </Box>
        </Box>
        <Typography variant="caption" align="center">
          {extendedFile?.file?.name}
        </Typography>
      </Box>
    );
  };
