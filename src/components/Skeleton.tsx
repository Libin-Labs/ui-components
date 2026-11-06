import React from 'react';
import { cn } from '../utilities/classNames';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circle' | 'rectangular';
  count?: number;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      width = '100%',
      height = '1rem',
      variant = 'text',
      count = 1,
      className,
      ...props
    },
    ref,
  ) => {
    const skeletons = Array.from({ length: count });

    const getVariantClass = () => {
      switch (variant) {
        case 'circle':
          return 'rounded-full w-10 h-10';
        case 'rectangular':
          return 'rounded-md';
        default:
          return 'rounded';
      }
    };

    return (
      <div className="space-y-2" ref={ref} {...props}>
        {skeletons.map((_, index) => (
          <div
            key={index}
            className={cn(
              'bg-gray-200 animate-pulse',
              getVariantClass(),
              className,
            )}
            style={{
              width: typeof width === 'number' ? `${width}px` : width,
              height: typeof height === 'number' ? `${height}px` : height,
            }}
          />
        ))}
      </div>
    );
  },
);

Skeleton.displayName = 'Skeleton';
