import React from 'react';
import { cn } from '../utilities/classNames';

export interface StackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  className?: string;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      direction = 'column',
      gap = 'md',
      align = 'stretch',
      justify = 'start',
      wrap = false,
      className,
    },
    ref
  ) => {
    const directionClasses = {
      row: 'flex-row',
      column: 'flex-col',
    };

    const gapClasses = {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };

    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          directionClasses[direction],
          gapClasses[gap],
          alignClasses[align],
          justifyClasses[justify],
          { 'flex-wrap': wrap },
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
