/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { CloudflareImageLoader } from './cloudflareImage.loader';
import { baseUrl } from 'app/services/baseQuery';

export type CloudflareImageProps = ImageProps & { base?: string };

export const CloudflareImage: FC<CloudflareImageProps> = ({
  src,
  base = baseUrl,
  ...props
}) => {
  return process.env.NODE_ENV === 'development' ? (
    <Image unoptimized={true} {...props} src={src} />
  ) : (
    <Image src={base + src} {...props} loader={CloudflareImageLoader} />
  );
};
