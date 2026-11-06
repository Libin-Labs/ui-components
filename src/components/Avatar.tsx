import React from 'react';
import { cn } from '../utilities/classNames';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'square' | 'rounded';
  initials?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
}

const sizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

const variantStyles = {
  circle: 'rounded-full',
  square: 'rounded-none',
  rounded: 'rounded-md',
};

const statusColors = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
};

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  (
    {
      size = 'md',
      variant = 'circle',
      initials,
      status,
      className,
      src,
      alt = 'Avatar',
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative inline-block">
        {src ? (
          <img
            ref={ref}
            src={src}
            alt={alt}
            className={cn(
              'bg-gray-200 object-cover',
              sizeStyles[size],
              variantStyles[variant],
              className,
            )}
            {...props}
          />
        ) : (
          <div
            className={cn(
              'bg-blue-600 text-white font-semibold flex items-center justify-center',
              sizeStyles[size],
              variantStyles[variant],
              className,
            )}
          >
            {initials || alt.charAt(0).toUpperCase()}
          </div>
        )}
        {status && (
          <div
            className={cn(
              'absolute bottom-0 right-0 rounded-full border-2 border-white',
              statusColors[status],
              size === 'sm' && 'w-2 h-2',
              size === 'md' && 'w-3 h-3',
              size === 'lg' && 'w-3 h-3',
              size === 'xl' && 'w-4 h-4',
            )}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';
