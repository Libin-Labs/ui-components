import React from 'react';
import { cn } from '../utilities/classNames';

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
  color?: 'primary' | 'warning' | 'danger';
}

const sizeStyles = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const colorStyles = {
  primary: 'text-blue-600',
  warning: 'text-yellow-500',
  danger: 'text-red-600',
};

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value = 0,
      onChange,
      max = 5,
      size = 'md',
      readonly = false,
      color = 'warning',
      className,
      ...props
    },
    ref,
  ) => {
    const [hoverValue, setHoverValue] = React.useState(0);

    return (
      <div
        ref={ref}
        className={cn('flex gap-1', className)}
        role="radiogroup"
        {...props}
      >
        {Array.from({ length: max }).map((_, index) => {
          const starValue = index + 1;
          const displayValue = hoverValue || value;
          const isFilled = starValue <= displayValue;

          return (
            <button
              key={index}
              className={cn(
                sizeStyles[size],
                readonly && 'cursor-default',
                !readonly && 'cursor-pointer hover:scale-110 transition-transform',
                colorStyles[color],
              )}
              onClick={() => !readonly && onChange?.(starValue)}
              onMouseEnter={() => !readonly && setHoverValue(starValue)}
              onMouseLeave={() => setHoverValue(0)}
              aria-label={`Rate ${starValue}`}
              disabled={readonly}
            >
              <svg
                className={cn('w-full h-full', isFilled ? 'fill-current' : 'fill-none stroke-current stroke-2')}
                viewBox="0 0 20 20"
              >
                <path d="M10 1.27l2.756 5.58h6.147l-4.97 3.613 1.897 5.835-4.83-3.512-4.83 3.512 1.897-5.835-4.97-3.613h6.147z" />
              </svg>
            </button>
          );
        })}
      </div>
    );
  },
);

Rating.displayName = 'Rating';
