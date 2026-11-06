import React from 'react';
import { cn } from '../utilities/classNames';

export interface ChipProps {
  label: string;
  icon?: React.ReactNode;
  onDelete?: () => void;
  variant?: 'default' | 'outlined' | 'filled';
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  avatar?: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      icon,
      onDelete,
      variant = 'default',
      color = 'primary',
      size = 'md',
      clickable = false,
      onClick,
      disabled = false,
      className,
      avatar,
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    };

    const colorClasses = {
      primary: {
        default: 'bg-blue-100 text-blue-700',
        outlined: 'border border-blue-300 text-blue-700',
        filled: 'bg-blue-600 text-white',
      },
      success: {
        default: 'bg-green-100 text-green-700',
        outlined: 'border border-green-300 text-green-700',
        filled: 'bg-green-600 text-white',
      },
      warning: {
        default: 'bg-yellow-100 text-yellow-700',
        outlined: 'border border-yellow-300 text-yellow-700',
        filled: 'bg-yellow-600 text-white',
      },
      error: {
        default: 'bg-red-100 text-red-700',
        outlined: 'border border-red-300 text-red-700',
        filled: 'bg-red-600 text-white',
      },
      info: {
        default: 'bg-cyan-100 text-cyan-700',
        outlined: 'border border-cyan-300 text-cyan-700',
        filled: 'bg-cyan-600 text-white',
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full transition-colors',
          sizeClasses[size],
          colorClasses[color][variant],
          {
            'cursor-pointer hover:opacity-80': clickable && !disabled,
            'opacity-50 cursor-not-allowed': disabled,
          },
          className
        )}
        onClick={clickable && !disabled ? onClick : undefined}
      >
        {avatar && <span className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">{avatar}</span>}
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{label}</span>
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="ml-1 hover:opacity-60 transition-opacity"
            aria-label={`Remove ${label}`}
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';
