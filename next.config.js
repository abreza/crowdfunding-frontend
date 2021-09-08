const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  reactStrictMode: true,
  images: {
    loader: 'custom',
    disableStaticImages: true,
  },
  env: {
    PUBLIC_URL: '',
  },
});
