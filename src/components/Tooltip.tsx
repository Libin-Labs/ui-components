import React, { useState } from 'react';
import { cn } from '../utilities/classNames';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const positionStyles = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowStyles = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-800',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-800',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-800',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-800',
};

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      position = 'top',
      delay = 200,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout>();

    const handleMouseEnter = () => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    const handleMouseLeave = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsVisible(false);
    };

    return (
      <div
        ref={ref}
        className={cn('relative inline-block', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
        {isVisible && (
          <div
            className={cn(
              'absolute z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded whitespace-nowrap',
              positionStyles[position],
            )}
          >
            {content}
            <div
              className={cn(
                'absolute w-0 h-0 border-4 border-transparent',
                arrowStyles[position],
              )}
            />
          </div>
        )}
      </div>
    );
  },
);

Tooltip.displayName = 'Tooltip';
