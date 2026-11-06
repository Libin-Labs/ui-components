import React from 'react';
import { cn } from '../utilities/classNames';

export interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  aspect?: 'square' | 'video' | 'auto';
  rounded?: boolean;
  shadow?: boolean;
  className?: string;
}

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      src,
      poster,
      width,
      height,
      controls = true,
      autoPlay = false,
      loop = false,
      muted = false,
      aspect = 'video',
      rounded = false,
      shadow = false,
      className,
      ...props
    },
    ref
  ) => {
    const aspectClasses = {
      square: 'aspect-square',
      video: 'aspect-video',
      auto: 'auto',
    };

    return (
      <div
        className={cn(
          'relative bg-black',
          aspectClasses[aspect] !== 'auto' && aspectClasses[aspect],
          {
            'rounded-lg overflow-hidden': rounded,
            'shadow-lg': shadow,
          },
          aspect === 'auto' && !height && 'w-full'
        )}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        }}
      >
        <video
          ref={ref}
          src={src}
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          className={cn(
            'w-full h-full',
            {
              'rounded-lg': rounded,
            },
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Video.displayName = 'Video';
