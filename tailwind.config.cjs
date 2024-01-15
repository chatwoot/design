import radixColorsPlugin from './plugins/radixColorsPlugin';

const tailwindConfig = {
  darkMode: 'class',
  content: ['./src/**/*.vue'],
  theme: {
    fontFamily: {
      sans: [
        'InterVariable, Inter, sans-serif',
      ],
    },
  },
  plugins: [
    radixColorsPlugin({
      colors: ['gray', 'slate', 'blue', 'red', 'amber', 'yellow', 'iris', 'orange', 'green']
    })
  ]
};

// eslint-disable-next-line
module.exports = tailwindConfig;
