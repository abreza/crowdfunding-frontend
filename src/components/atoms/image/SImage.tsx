import { ImageProps } from 'next/image';
import {
  CloudflareImage,
  CloudflareImageProps,
} from '../cloudFlareImage/cloudFlareImage';
import styles from './SImage.module.css';
import { FC } from 'react';

const SImage: FC<
  CloudflareImageProps & {
    width?: string | number;
    maxWidth?: string | number;
  }
> = ({ width, maxWidth, ...rest }) => {
  return (
    <div
      className={styles.imageContainer}
      style={{
        width: width || '100%',
        maxWidth: maxWidth || '100%',
      }}>
      <CloudflareImage className={styles.image} {...rest} />
    </div>
  );
};

export default SImage;