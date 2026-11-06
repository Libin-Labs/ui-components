import React from 'react';
import { cn } from '../utilities/classNames';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      id,
      className,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            className={cn(
              'w-4 h-4 rounded border border-gray-300 text-blue-600',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-red-500',
              className,
            )}
            {...props}
          />
          {label && <span className="text-sm text-gray-700">{label}</span>}
        </label>
        {error && errorMessage && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
