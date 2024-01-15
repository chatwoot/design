import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import * as radixColors from '@radix-ui/colors';

export default defineConfig({
  setupFile: './histoire.setup.ts',
  plugins: [HstVue()],
  theme: {
    darkClass: 'dark',
    title: '@chatwoot/design',
    logo: {
      square: '/src/assets/images/brand-assets/logo-thumbnail.svg',
      light: '/src/assets/images/brand-assets/logo.png',
      dark: '/src/assets/images/brand-assets/logo-dark.png',
    },

    colors: {
      primary: {
        100: radixColors.blue.blue4,
        200: radixColors.blue.blue5,
        300: radixColors.blue.blue6,
        400: radixColors.blue.blue7,
        500: radixColors.blue.blue8,
        600: radixColors.blue.blue9,
        700: radixColors.blue.blue10,
        800: radixColors.blue.blue11,
        900: radixColors.blue.blue12,
      },
    },
  },
  defaultStoryProps: {
    icon: 'carbon:cube',
    iconColor: '#1F93FF',
    layout: {
      type: 'grid',
      width: '80%',
    },
  },
  tree: {
    groups: [
      {
        id: 'top',
        title: '',
      },
      {
        id: 'components',
        title: 'Components',
        include: () => true,
      },
    ],
  },
});
