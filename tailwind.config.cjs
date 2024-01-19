import radixColorsPlugin from './plugins/radixColorsPlugin';
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';

const tailwindConfig = {
  darkMode: 'class',
  content: ['./src/**/*.vue'],
  theme: {
    fontFamily: {
      sans: ['InterVariable, Inter, sans-serif'],
    },
  },
  plugins: [
    radixColorsPlugin({
      colors: ['gray', 'slate', 'blue', 'red', 'amber', 'yellow', 'iris', 'orange', 'green'],
    }),
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all icon collections you have installed
      collections: getIconCollections(['fluent', 'bxl']),
    }),
  ],
};

// eslint-disable-next-line
module.exports = tailwindConfig;
