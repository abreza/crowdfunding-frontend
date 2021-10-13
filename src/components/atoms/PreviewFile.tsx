import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Cancel as CancelIcon } from '@mui/icons-material';
import { CircularProgressWithLabel } from 'src/components/atoms/CircularProgressWithLabel';
import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import videoImg from 'src/assets/images/video.png';
import { ExtendedFile } from '../molecules/dropzone/MyDropzone';

export const PreviewFile: FC<{
  extendedFile: ExtendedFile;
  removeFile?: (id: number) => void;
}> = ({ extendedFile, removeFile }) => {
  const [previewImage, setPreviewImage] = useState<string | undefined>();

  useEffect(() => {
    if (!extendedFile.file) {
      setPreviewImage(undefined);
      return;
    }
    const fileExtension = extendedFile.file.name.split('.').pop();

    setPreviewImage(videoImg);
    if (fileExtension === 'mp4') {
    } else {
      const pre = window.URL.createObjectURL(
        new Blob([extendedFile.file], { type: 'image/png' })
      );
      setPreviewImage(pre);
    }
  }, [extendedFile]);

  return (
    <Box key={extendedFile.id} sx={{ width: 130, mx: 1 }}>
      <Box
        sx={{
          display: 'inline-flex',
          borderRadius: 2,
          border: '1px solid #eaeaea',
          width: '100%',
          height: 140,
          p: 0.5,
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        {removeFile && (
          <IconButton
            onClick={() => removeFile(extendedFile.id)}
            sx={{ position: 'absolute', top: -15, left: -15, zIndex: 5 }}
            color="error"
          >
            <CancelIcon />
          </IconButton>
        )}
        <Box
          sx={{
            display: 'flex',
            minWidth: 0,
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            position: 'relative',
            borderRadius: 2,
          }}
        >
          {previewImage && (
            <Image
              src={previewImage}
              layout="fill"
              objectFit="cover"
              alt={extendedFile?.file?.name}
            />
          )}

          <CircularProgressWithLabel
            value={extendedFile.progress ? extendedFile.progress : 0}
            size={40}
            finished={Boolean(extendedFile.url)}
          />
        </Box>
      </Box>
      <Typography variant="caption" align="center" sx={{ width: '100%' }}>
        {extendedFile?.file?.name}
      </Typography>
    </Box>
  );
};
