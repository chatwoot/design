import type { UIColors } from '../../../helpers/colors';

const COLOR_OPTIONS: Record<UIColors, string> = {
  primary:  'bg-blue-400 text-blue-1100',
  secondary: 'bg-gray-400 text-gray-1100',
  warning: 'bg-orange-400 text-orange-1100',
  caution: 'bg-amber-400 text-amber-1100',
  danger: 'bg-red-400 text-red-1100',
  success:'bg-green-400 text-green-1100',
};

export default function useColors({ color }: { color: UIColors; }) {
  return COLOR_OPTIONS[color];
}
