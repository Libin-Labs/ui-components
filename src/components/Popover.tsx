import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utilities/classNames';

export interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click';
  className?: string;
  contentClassName?: string;
  arrow?: boolean;
  offset?: number;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      content,
      position = 'top',
      trigger = 'hover',
      className,
      contentClassName,
      arrow = true,
      offset = 8,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (trigger === 'click') {
        const handleClickOutside = (e: MouseEvent) => {
          if (
            popoverRef.current &&
            triggerRef.current &&
            !popoverRef.current.contains(e.target as Node) &&
            !triggerRef.current.contains(e.target as Node)
          ) {
            setIsOpen(false);
          }
        };

        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }
      }
    }, [isOpen, trigger]);

    const positionClasses = {
      top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
      bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
      left: 'right-full mr-2 top-1/2 -translate-y-1/2',
      right: 'left-full ml-2 top-1/2 -translate-y-1/2',
    };

    const arrowClasses = {
      top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-gray-900 border-l-transparent border-r-transparent border-b-transparent',
      bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-gray-900 border-l-transparent border-r-transparent border-t-transparent',
      left: 'left-[-4px] top-1/2 -translate-y-1/2 border-l-gray-900 border-t-transparent border-b-transparent border-r-transparent',
      right: 'right-[-4px] top-1/2 -translate-y-1/2 border-r-gray-900 border-t-transparent border-b-transparent border-l-transparent',
    };

    return (
      <div
        ref={ref}
        className={cn('relative inline-block', className)}
        onMouseEnter={() => trigger === 'hover' && setIsOpen(true)}
        onMouseLeave={() => trigger === 'hover' && setIsOpen(false)}
      >
        <div
          ref={triggerRef}
          onClick={() => trigger === 'click' && setIsOpen(!isOpen)}
        >
          {children}
        </div>

        {isOpen && (
          <div
            ref={popoverRef}
            className={cn(
              'absolute z-50 bg-gray-900 text-white text-sm rounded-lg shadow-lg p-3 max-w-xs',
              positionClasses[position],
              contentClassName
            )}
          >
            {content}
            {arrow && (
              <div
                className={cn(
                  'absolute w-0 h-0 border-4',
                  arrowClasses[position]
                )}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';
