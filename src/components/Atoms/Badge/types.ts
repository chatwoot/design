import type { UIColors } from '../../../helpers/colors';

export type BadgeSizes = 'medium' | 'small';
export type BadgeColors = UIColors;
export type BadgeVariants = 'solid' | 'rounded';

export interface BadgeProps {
  size?: BadgeSizes;
  color?: BadgeColors;
  variant?: BadgeVariants;
  text?: string;
  disabled?: boolean;
}
