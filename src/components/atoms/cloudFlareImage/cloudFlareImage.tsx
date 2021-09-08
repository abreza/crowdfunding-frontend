/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { CloudflareImageLoader } from './cloudflareImage.loader';
import { frontUrl } from 'config';

export type CloudflareImageProps = ImageProps & { base?: string };

export const CloudflareImage: FC<CloudflareImageProps> = ({
  src,
  base = frontUrl,
  ...props
}) => {
  return process.env.NODE_ENV === 'development' || src?.startWith('data:') ? (
    <Image unoptimized={true} {...props} src={src} />
  ) : (
    <Image src={base + src} {...props} loader={CloudflareImageLoader} />
  );
};
