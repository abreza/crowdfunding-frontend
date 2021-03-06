import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { CloudflareImageLoader } from './cloudflareImage.loader';
import { frontUrl } from 'src/config';

export type CloudflareImageProps = ImageProps & { base?: string };

export const CloudflareImage: FC<CloudflareImageProps> = ({
  src,
  base = frontUrl,
  ...props
}) => {
  return process.env.NODE_ENV === 'development' || src?.startsWith('data:') ? (
    <Image unoptimized={true} {...props} src={src} />
  ) : (
    <Image src={base + src} {...props} loader={CloudflareImageLoader} />
  );
};
