/**
 * @type {import('next').NextConfig}
 */

const withImages = require('next-images');
module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  env: {
    PUBLIC_URL: '',
  },
});
