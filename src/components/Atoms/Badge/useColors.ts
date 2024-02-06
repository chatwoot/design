import type { UIColors } from '../../../helpers/colors';

const COLOR_OPTIONS: Record<UIColors, string> = {
  blue:  'bg-blue-400 text-blue-1100',
  gray: 'bg-gray-400 text-gray-1100',
  orange: 'bg-orange-400 text-orange-1100',
  amber: 'bg-amber-400 text-amber-1100',
  red: 'bg-red-400 text-red-1100',
  green:'bg-green-400 text-green-1100',
};

export default function useColors({ color }: { color: UIColors; }) {
  return COLOR_OPTIONS[color];
}
