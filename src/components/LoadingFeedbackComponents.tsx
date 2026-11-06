import React from 'react';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  children?: React.ReactNode;
}

export const SpinnerDots: React.FC<LoadingProps> = ({ size = 'md', color = 'blue', className = '', ...props }) => {
  const sizeClass = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-12 h-12' }[size];

  return (
    <div className={`flex gap-1 items-center justify-center ${className}`} {...props}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClass} bg-${color}-600 rounded-full animate-bounce`}
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  );
};

export const SpinnerRing: React.FC<LoadingProps> = ({ size = 'md', color = 'blue', className = '', ...props }) => {
  const sizeClass = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-12 h-12' }[size];

  return (
    <div className={`${sizeClass} border-4 border-gray-200 border-t-${color}-600 rounded-full animate-spin ${className}`} {...props}></div>
  );
};

export const SpinnerBar: React.FC<LoadingProps> = ({ size = 'md', color = 'blue', className = '', ...props }) => {
  const heightClass = { sm: 'h-1', md: 'h-2', lg: 'h-3' }[size];

  return (
    <div className={`w-full ${heightClass} bg-gray-200 rounded-full overflow-hidden ${className}`} {...props}>
      <div
        className={`h-full w-1/3 bg-${color}-600 animate-pulse`}
        style={{
          animation: 'slide 1.5s ease-in-out infinite',
        }}
      ></div>
    </div>
  );
};

export const SpinnerBounce: React.FC<LoadingProps> = ({ size = 'md', color = 'blue', className = '', ...props }) => {
  const sizeClass = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-12 h-12' }[size];

  return (
    <div className={`flex gap-2 items-end justify-center ${className}`} {...props}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClass} bg-${color}-600 rounded-full`}
          style={{
            animation: 'bounce 1.4s ease-in-out infinite',
            animationDelay: `${i * 0.16}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export const SpinnerPulse: React.FC<LoadingProps> = ({ size = 'md', color = 'blue', className = '', ...props }) => {
  const sizeClass = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-12 h-12' }[size];

  return (
    <div
      className={`${sizeClass} bg-${color}-600 rounded-full animate-pulse ${className}`}
      {...props}
    ></div>
  );
};

export const SkeletonText: React.FC<LoadingProps & { lines?: number }> = ({
  lines = 3,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
      ))}
    </div>
  );
};

export const SkeletonCard: React.FC<LoadingProps> = ({ className = '', ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 space-y-4 ${className}`} {...props}>
      <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
      <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
};

export const SkeletonImage: React.FC<LoadingProps> = ({
  size = 'md',
  className = '',
  ...props
}) => {
  const sizeClass = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-96 h-96',
  }[size];

  return <div className={`${sizeClass} bg-gray-200 rounded animate-pulse ${className}`} {...props}></div>;
};

export const SkeletonTable: React.FC<LoadingProps & { rows?: number; cols?: number }> = ({
  rows = 5,
  cols = 4,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-2">
          {Array.from({ length: cols }).map((_, j) => (
            <div key={j} className="flex-1 h-6 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const ProgressLinear: React.FC<
  LoadingProps & {
    value: number;
    max?: number;
    showLabel?: boolean;
    color?: 'blue' | 'green' | 'red' | 'yellow';
  }
> = ({ value, max = 100, showLabel = false, color = 'blue', className = '', ...props }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-${color}-600 transition-all duration-300`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
      {showLabel && <p className="text-sm text-gray-600 mt-1">{Math.round(percentage)}%</p>}
    </div>
  );
};

export const ProgressCircular: React.FC<
  LoadingProps & {
    value: number;
    max?: number;
    showLabel?: boolean;
    color?: 'blue' | 'green' | 'red' | 'yellow';
  }
> = ({ value, max = 100, showLabel = false, size = 'md', color = 'blue', className = '', ...props }) => {
  const percentage = (value / max) * 100;
  const sizeClass = { sm: 'w-16 h-16', md: 'w-24 h-24', lg: 'w-32 h-32' }[size];
  const circumference = 2 * Math.PI * 45;

  return (
    <div className={`flex flex-col items-center ${className}`} {...props}>
      <div className={`${sizeClass} relative`}>
        <svg className="transform -rotate-90 w-full h-full">
          <circle cx="50%" cy="50%" r="45" fill="none" stroke="#e5e7eb" strokeWidth="4"></circle>
          <circle
            cx="50%"
            cy="50%"
            r="45"
            fill="none"
            stroke={`currentColor`}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percentage / 100) * circumference}
            className={`text-${color}-600 transition-all duration-300`}
          ></circle>
        </svg>
        {showLabel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold">{Math.round(percentage)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProgressStepped: React.FC<
  LoadingProps & {
    current: number;
    total: number;
    color?: 'blue' | 'green' | 'red' | 'yellow';
  }
> = ({ current, total, color = 'blue', className = '', ...props }) => {
  return (
    <div className={`flex gap-2 ${className}`} {...props}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-2 rounded-full ${i < current ? `bg-${color}-600` : 'bg-gray-200'} transition-colors`}
        ></div>
      ))}
    </div>
  );
};

export const Overlay: React.FC<LoadingProps & { isVisible?: boolean }> = ({
  isVisible = true,
  className = '',
  children,
  ...props
}) => {
  if (!isVisible) return null;

  return (
    <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ${className}`} {...props}>
      {children}
    </div>
  );
};
