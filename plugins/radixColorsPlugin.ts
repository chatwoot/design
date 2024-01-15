const plugin = require('tailwindcss/plugin');
const radixColors = require('@radix-ui/colors');

type Options = {
  colors: Array<string>
}

const getColorIndex = (colorKey, color) => Number(colorKey.replace(color, '')) * 100;

export default  plugin.withOptions(
   (options: Options) => {
    return ({ addBase }) => {
      const colorVariables = options.colors.reduce((acc, selectedColor) => {
        const lightColors = radixColors[selectedColor];
        const darkColors = radixColors[`${selectedColor}Dark`];

        Object.keys(lightColors).map(colorKey => {
          acc.lightColors[`--${selectedColor}-${getColorIndex(colorKey, selectedColor)}`] = lightColors[colorKey];
        });

        Object.keys(darkColors).map(colorKey => {
          acc.darkColors[`--${selectedColor}-${getColorIndex(colorKey, selectedColor)}`] = darkColors[colorKey];
        });

        return acc;
      }, {
        lightColors: {},
        darkColors: {}
      });
      addBase({
        ':root': colorVariables.lightColors,
        '.dark': colorVariables.darkColors,
      });
    };
  },
   (options: Options) => {
    const availableColors = options.colors.reduce((acc, color) => {
      const colorScale = Object.keys(radixColors[color]).reduce((acc, colorKey) => {
        const index = getColorIndex(colorKey, color);
        acc[index]= `var(--${color}-${index})`;
        return acc;
      }, {});

      return {
        ...acc,
        [color]: colorScale
      };
    }, {});
    return {
      theme: {
        colors: availableColors,
      },
    };
  }
);
