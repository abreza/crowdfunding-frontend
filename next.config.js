/**
 * @type {import('next').NextConfig}
 */

const withImages = require('next-images');
const nextTranslate = require('next-translate');

module.exports = withImages(
  nextTranslate({
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
  })
);
