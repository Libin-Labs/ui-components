import React from 'react';
import { cn } from '../utilities/classNames';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  fallback?: React.ReactNode;
  rounded?: boolean;
  border?: boolean;
  shadow?: boolean;
  aspect?: 'square' | 'video' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  onLoadingStateChange?: (state: 'loading' | 'loaded' | 'error') => void;
  className?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      fallback,
      rounded = false,
      border = false,
      shadow = false,
      aspect = 'auto',
      objectFit = 'cover',
      onLoadingStateChange,
      className,
      ...props
    },
    ref
  ) => {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const aspectClasses = {
      square: 'aspect-square',
      video: 'aspect-video',
      auto: 'auto',
    };

    const handleLoad = () => {
      setLoading(false);
      onLoadingStateChange?.('loaded');
    };

    const handleError = () => {
      setError(true);
      setLoading(false);
      onLoadingStateChange?.('error');
    };

    if (error && fallback) {
      return <>{fallback}</>;
    }

    return (
      <div
        className={cn(
          'relative bg-gray-100',
          aspectClasses[aspect] !== 'auto' && aspectClasses[aspect],
          {
            'rounded-lg': rounded,
            'border border-gray-200': border,
            'shadow-md': shadow,
          },
          aspect === 'auto' && !height && 'w-full'
        )}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        }}
      >
        <img
          ref={ref}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full',
            {
              rounded: rounded,
              'animate-pulse': loading,
            },
            className
          )}
          style={{
            objectFit: objectFit,
          }}
          {...props}
        />
        {loading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
        )}
      </div>
    );
  }
);

Image.displayName = 'Image';
