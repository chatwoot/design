import type { UIColors } from '../../../helpers/colors';

export type BadgeSizes = 'medium' | 'small';
export type BadgeColors = UIColors;
export type BadgeVariants = 'status' | 'count';

export interface BadgeProps {
  size?: BadgeSizes;
  color?: BadgeColors;
  variant?: BadgeVariants;
  text?: string;
  disabled?: boolean;
}
