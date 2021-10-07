/**
 * @type {import('next').NextConfig}
 */

const withImages = require('next-images');
const nextTranslate = require('next-translate');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withImages(
  withPWA(
    nextTranslate({
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
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
  )
);
