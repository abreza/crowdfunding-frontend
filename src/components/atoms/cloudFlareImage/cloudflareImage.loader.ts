import { ImageLoader } from 'next/image';

const CloudflareImageLoader: ImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75;
  }
  return `https://images.ab-reza.workers.dev?width=${width}&quality=${quality}&image=https://[yourdomain.com]${src}`;
};

export { CloudflareImageLoader };
