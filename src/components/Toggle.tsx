import React from 'react';
import { cn } from '../utilities/classNames';

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const sizeStyles = {
  sm: 'w-10 h-6',
  md: 'w-12 h-7',
  lg: 'w-14 h-8',
};

const toggleSizeStyles = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const translateStyles = {
  sm: 'translate-x-5',
  md: 'translate-x-6',
  lg: 'translate-x-7',
};

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked = false,
      onChange,
      size = 'md',
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const handleClick = () => {
      onChange?.(!checked);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          'relative inline-flex rounded-full transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          sizeStyles[size],
          checked ? 'bg-blue-600' : 'bg-gray-300',
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            'absolute top-1/2 left-1 -translate-y-1/2 bg-white rounded-full transition-transform',
            toggleSizeStyles[size],
            checked && translateStyles[size],
          )}
        />
      </button>
    );
  },
);

Toggle.displayName = 'Toggle';
