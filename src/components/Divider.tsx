import React from 'react';
import { cn } from '../utilities/classNames';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  label?: string;
}

const variantStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      label,
      className,
      ...props
    },
    ref,
  ) => {
    if (orientation === 'vertical') {
      return (
        <hr
          ref={ref}
          className={cn(
            'h-full w-0 border-l border-gray-300',
            variantStyles[variant],
            className,
          )}
          {...props}
        />
      );
    }

    if (label) {
      return (
        <div className={cn('relative flex items-center my-4', className)}>
          <hr
            ref={ref}
            className={cn(
              'flex-grow border-t border-gray-300',
              variantStyles[variant],
            )}
            {...props}
          />
          <span className="px-2 text-sm text-gray-600 bg-white">{label}</span>
          <hr
            className={cn(
              'flex-grow border-t border-gray-300',
              variantStyles[variant],
            )}
          />
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn(
          'border-t border-gray-300 my-4',
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';
