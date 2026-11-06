import React from 'react';
import { cn } from '../utilities/classNames';

export interface TimelineItemProps {
  title: string;
  description?: string;
  timestamp?: string;
  icon?: React.ReactNode;
  status?: 'pending' | 'completed' | 'active' | 'error';
  children?: React.ReactNode;
  className?: string;
}

export interface TimelineProps {
  items: TimelineItemProps[];
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      title,
      description,
      timestamp,
      icon,
      status = 'pending',
      children,
      className,
    },
    ref
  ) => {
    const statusColors = {
      pending: 'bg-gray-300',
      completed: 'bg-green-500',
      active: 'bg-blue-500',
      error: 'bg-red-500',
    };

    return (
      <div ref={ref} className={cn('timeline-item flex gap-4', className)}>
        <div className="flex flex-col items-center">
          <div
            className={cn(
              'w-6 h-6 rounded-full flex items-center justify-center text-white relative',
              statusColors[status]
            )}
          >
            {icon || (
              <div className="w-2 h-2 bg-white rounded-full" />
            )}
          </div>
          <div className="w-0.5 h-16 bg-gray-300 mt-2" />
        </div>
        <div className="flex-1 pb-8">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          {timestamp && (
            <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
          )}
          {description && (
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          )}
          {children}
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = 'TimelineItem';

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      items,
      orientation = 'vertical',
      size = 'md',
      className,
      children,
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'timeline',
          {
            'flex flex-col': orientation === 'vertical',
            'flex flex-row overflow-x-auto': orientation === 'horizontal',
          },
          sizeClasses[size],
          className
        )}
      >
        {items.length > 0 ? (
          items.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              className={cn({
                '[&_>.timeline-item:last-child_>.flex:last-child_.h-16]:h-0':
                  index === items.length - 1,
              })}
            />
          ))
        ) : (
          children
        )}
      </div>
    );
  }
);

Timeline.displayName = 'Timeline';
export { TimelineItem };
