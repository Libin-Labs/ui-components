/**
 * Class name utilities for combining and conditionally applying class names
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((cls) => typeof cls === 'string' && cls.trim())
    .join(' ');
}

/**
 * Spacing utility classes
 */
export const spacing = {
  padding: {
    none: 'p-0',
    xs: 'p-1',
    sm: 'p-2',
    medium: 'p-4',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    '2xl': 'p-12',
  },
  margin: {
    none: 'm-0',
    xs: 'm-1',
    sm: 'm-2',
    medium: 'm-4',
    md: 'm-4',
    lg: 'm-6',
    xl: 'm-8',
    '2xl': 'm-12',
  },
  gap: {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
  },
};

/**
 * Color utility classes
 */
export const colors = {
  background: {
    light: 'bg-white',
    alt: 'bg-gray-50',
    dark: 'bg-gray-900',
    primary: 'bg-blue-50',
    success: 'bg-green-50',
    warning: 'bg-yellow-50',
    danger: 'bg-red-50',
  },
  text: {
    dark: 'text-gray-900',
    primary: 'text-gray-700',
    muted: 'text-gray-500',
    light: 'text-white',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    info: 'text-blue-600',
  },
  border: {
    light: 'border-gray-200',
    medium: 'border-gray-300',
    dark: 'border-gray-400',
  },
};

/**
 * Typography utility classes
 */
export const typography = {
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  },
  weight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  line: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
  },
};

/**
 * Border radius utility classes
 */
export const radius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

/**
 * Shadow utility classes
 */
export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

/**
 * Flex utility classes
 */
export const flex = {
  center: 'flex items-center justify-center',
  between: 'flex items-center justify-between',
  start: 'flex items-start justify-start',
  end: 'flex items-end justify-end',
  col: 'flex flex-col',
  colCenter: 'flex flex-col items-center justify-center',
};

/**
 * Responsive utility classes
 */
export const responsive = {
  hidden: 'hidden',
  smOnly: 'sm:block hidden',
  mdOnly: 'md:block hidden lg:hidden',
  lgOnly: 'lg:block hidden',
  smHidden: 'sm:hidden',
  mdHidden: 'md:hidden',
  lgHidden: 'lg:hidden',
};

/**
 * Display utility classes
 */
export const display = {
  block: 'block',
  inline: 'inline',
  inlineBlock: 'inline-block',
  flex: 'flex',
  grid: 'grid',
  hidden: 'hidden',
};

/**
 * Position utility classes
 */
export const position = {
  relative: 'relative',
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
};

/**
 * Size utility classes
 */
export const size = {
  full: 'w-full h-full',
  screen: 'w-screen h-screen',
  min: 'w-min h-min',
  max: 'w-max h-max',
};

/**
 * Variant helper function for creating consistent variant classes
 */
export function variant(
  variants: Record<string, string>,
  defaultVariant: string,
  selected?: string,
): string {
  return variants[selected || defaultVariant] || variants[defaultVariant];
}

/**
 * State utility classes
 */
export const state = {
  focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  hover: 'hover:opacity-90 transition-opacity',
  active: 'active:opacity-75',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
};
