/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';

const BaseHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="application-name" content="Crowd Funding" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Crowd Funding" />
      <meta
        name="description"
        content="A place to invest in science projects."
      />
      <meta name="format-detection" content="telephone=no" />

      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

      <link rel="icon" href={process.env.PUBLIC_URL + 'logo.png'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-57x57.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-60x60.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-72x72.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-76x76.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-114x114.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-120x120.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-144x144.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-152x152.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-180x180.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={process.env.PUBLIC_URL + '/favicon/android-icon-192x192.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={process.env.PUBLIC_URL + '/favicon/favicon-32x32.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={process.env.PUBLIC_URL + '/favicon/favicon-96x96.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={process.env.PUBLIC_URL + '/favicon/favicon-16x16.png'}
      />
      <link rel="manifest" href={process.env.PUBLIC_URL + '/manifest.json'} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={process.env.PUBLIC_URL + '/favicon/ms-icon-144x144.png'}
      />
      <meta name="msapplication-TileColor" content="#007FFF" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#007FFF" />
      <title>تامین مالی جمعی شریف</title>
    </Head>
  );
};

export default BaseHead;
