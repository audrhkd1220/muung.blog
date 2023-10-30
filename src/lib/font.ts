import localFont from 'next/font/local';

export const roboto = localFont({
  variable: '--Roboto',
  src: [
    {
      path: '../fonts/Roboto-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Roboto-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Roboto-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Roboto-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
});
