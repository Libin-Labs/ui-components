import React, { createContext, useContext, ReactNode } from 'react';

export type ThemeName = 'light' | 'dark' | 'auto';

export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  background: string;
  backgroundAlt: string;
  text: string;
  textMuted: string;
  border: string;
  borderLight: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
}

export interface ThemeConfig {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
}

const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#17a2b8',
    background: '#ffffff',
    backgroundAlt: '#f8f9fa',
    text: '#212529',
    textMuted: '#6c757d',
    border: '#dee2e6',
    borderLight: '#e9ecef',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
};

interface ThemeContextValue {
  theme: ThemeConfig;
  themeName: ThemeName;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeName | ThemeConfig;
}

export function ThemeProvider({ children, theme = 'light' }: ThemeProviderProps) {
  const themeConfig = typeof theme === 'string' ? defaultTheme : { ...defaultTheme, ...theme };
  const themeName = typeof theme === 'string' ? theme : 'light';

  const value: ThemeContextValue = {
    theme: themeConfig,
    themeName: themeName as ThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={themeName}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeConfig {
  const context = useContext(ThemeContext);
  if (!context) {
    console.warn(
      'useTheme must be used within a ThemeProvider. Falling back to default theme.',
    );
    return defaultTheme;
  }
  return context.theme;
}

export function useThemeName(): ThemeName {
  const context = useContext(ThemeContext);
  return context?.themeName || 'light';
}

export { defaultTheme };
