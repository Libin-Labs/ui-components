import React from 'react';
import { cn } from '../utilities/classNames';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  padding?: 'sm' | 'md' | 'lg';
  border?: boolean;
  interactive?: boolean;
}

const elevationStyles = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
};

const paddingStyles = {
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      elevation = 'md',
      padding = 'md',
      border = false,
      interactive = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-lg',
          elevationStyles[elevation],
          paddingStyles[padding],
          border && 'border border-gray-200',
          interactive && 'cursor-pointer hover:shadow-lg transition-shadow duration-200',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
