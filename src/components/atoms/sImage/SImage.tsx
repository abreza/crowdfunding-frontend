import Image, { ImageProps } from 'next/image';
import styles from './SImage.module.css';
import { FC } from 'react';

const SImage: FC<
  ImageProps & {
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
      <Image className={styles.image} {...rest} />
    </div>
  );
};

export default SImage;
