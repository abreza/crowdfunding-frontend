/**
 * @type {import('next').NextConfig}
 */

const withImages = require('next-images');
module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: [
      'bankautomationnews.com',
      'localhost:3000',
      '127.0.0.1',
      'crowdfunding.mamalan.ir',
    ],
  },
  env: {
    PUBLIC_URL: '',
  },
});
