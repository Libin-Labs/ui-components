import React from 'react';
import { cn } from '../utilities/classNames';

export interface TagProps {
  label: string;
  onRemove?: () => void;
  variant?: 'default' | 'outlined' | 'solid';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  closeable?: boolean;
  className?: string;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      label,
      onRemove,
      variant = 'default',
      color = 'primary',
      size = 'md',
      closeable = true,
      className,
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-2.5 py-1.5',
      lg: 'text-base px-3 py-2',
    };

    const colorMap = {
      primary: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
      secondary: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
      success: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' },
      warning: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' },
      error: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
    };

    const colors = colorMap[color];

    const variantClasses = {
      default: cn(colors.bg, colors.text),
      outlined: cn('border', colors.border, colors.text),
      solid: cn('bg-' + color + '-600 text-white'),
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 rounded-md font-medium',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      >
        {label}
        {closeable && onRemove && (
          <button
            onClick={onRemove}
            className="hover:opacity-70 transition-opacity ml-0.5"
            aria-label={`Remove ${label}`}
          >
            ×
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';
