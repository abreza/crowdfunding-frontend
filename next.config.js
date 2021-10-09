/**
 * @type {import('next').NextConfig}
 */

const withPlugins = require('next-compose-plugins');

const withImages = require('next-images');
const nextTranslate = require('next-translate');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const prod = process.env.NODE_ENV === 'production';

module.exports = withPlugins([[withImages], [withPWA], [nextTranslate]], {
  pwa: {
    disable: prod ? false : true,
    dest: 'public',
    runtimeCaching,
    publicExcludes: ['!robots.txt', '!sitemap.xml'],
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
});
