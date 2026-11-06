import React from 'react';
import { cn } from '../utilities/classNames';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  animated?: boolean;
  showLabel?: boolean;
}

const sizeStyles = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const variantStyles = {
  primary: 'bg-blue-600',
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  danger: 'bg-red-600',
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      size = 'md',
      variant = 'primary',
      animated = false,
      showLabel = false,
      className,
      ...props
    },
    ref,
  ) => {
    const percentage = Math.min((value / max) * 100, 100);

    return (
      <div ref={ref} className={cn('', className)} {...props}>
        <div className={cn('w-full bg-gray-200 rounded-full overflow-hidden', sizeStyles[size])}>
          <div
            className={cn(
              'h-full transition-all duration-300',
              variantStyles[variant],
              animated && 'animate-pulse',
            )}
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
          />
        </div>
        {showLabel && (
          <p className="mt-2 text-sm text-gray-600">
            {Math.round(percentage)}%
          </p>
        )}
      </div>
    );
  },
);

Progress.displayName = 'Progress';
