/**
 * CSS-in-JS style utilities for dynamic styling
 */

export interface StyleObject {
  [key: string]: string | number | undefined;
}

export function createStyles(styles: StyleObject): React.CSSProperties {
  const result: React.CSSProperties = {};

  for (const [key, value] of Object.entries(styles)) {
    if (value !== undefined) {
      // Convert camelCase CSS property names to kebab-case if needed
      const cssKey = key as keyof React.CSSProperties;
      result[cssKey] = value;
    }
  }

  return result;
}

export function combineStyles(...styles: (StyleObject | undefined | null)[]): React.CSSProperties {
  const result: React.CSSProperties = {};

  for (const style of styles) {
    if (style) {
      Object.assign(result, createStyles(style));
    }
  }

  return result;
}

/**
 * Media query builder
 */
export const media = {
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  xl: '@media (min-width: 1280px)',
  '2xl': '@media (min-width: 1536px)',
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
  motion: '@media (prefers-reduced-motion: no-preference)',
};

/**
 * CSS variable builder
 */
export function createCSSVariables(variables: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(variables)) {
    result[`--${key}`] = value;
  }

  return result;
}

/**
 * Get CSS variable value
 */
export function getCSSVariable(name: string): string {
  if (typeof window === 'undefined') {
    return '';
  }
  return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
}

/**
 * Set CSS variable value
 */
export function setCSSVariable(name: string, value: string): void {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.style.setProperty(`--${name}`, value);
}

/**
 * CSS animation utilities
 */
export const animations = {
  fadeIn: 'animation: fadeIn 0.3s ease-in-out',
  fadeOut: 'animation: fadeOut 0.3s ease-in-out',
  slideInUp: 'animation: slideInUp 0.3s ease-in-out',
  slideOutDown: 'animation: slideOutDown 0.3s ease-in-out',
  slideInRight: 'animation: slideInRight 0.3s ease-in-out',
  slideOutLeft: 'animation: slideOutLeft 0.3s ease-in-out',
  scaleIn: 'animation: scaleIn 0.3s ease-in-out',
  scaleOut: 'animation: scaleOut 0.3s ease-in-out',
};
