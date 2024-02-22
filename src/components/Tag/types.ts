export type TagSizes = 's' | 'm';
export type TagStyles = 'ghost' | 'outlined';

export type NonMutuallyExclusiveProps = {
  size?: TagSizes;
  icon?: string;
  emoji?: string;
  color?: string;
  style?: TagStyles;
  disabled?: boolean;
  clickable?: boolean;
  removable?: boolean;
  expandable?: boolean;
};

export type TagProps = NonMutuallyExclusiveProps &
  (
    | { emoji?: string; icon?: undefined; color?: undefined }
    | { emoji?: undefined; icon?: string; color?: undefined }
    | { emoji?: undefined; icon?: undefined; color?: string }
  ) & (
    | { removable?: boolean, expandable?: undefined }
    | { removable?: undefined, expandable?: boolean }
  )
