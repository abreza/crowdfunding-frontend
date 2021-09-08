/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { CloudflareImageLoader } from './cloudflareImage.loader';

export const CloudflareImage: FC<ImageProps> = (props) => {
  return process.env.NODE_ENV === 'development' ? (
    <Image unoptimized={true} {...props} />
  ) : (
    <Image {...props} loader={CloudflareImageLoader} />
  );
};
