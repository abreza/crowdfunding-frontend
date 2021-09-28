import Image, { ImageProps } from 'next/image';
import { FC } from 'react';
import { Box } from '@mui/system';

const SImage: FC<
  ImageProps & {
    maxWidth?: string | number;
  }
> = ({ maxWidth, ...rest }) => {
  const { width, height, alt } = rest;
  return (
    <Box
      sx={{
        width: width || '100%',
        height: height || '100%',
        maxWidth: maxWidth || '100%',
        position: 'relative',
        '> div': {
          position: 'unset',
        },
      }}>
      <Image {...rest} alt={alt} />
    </Box>
  );
};

export default SImage;
