import React from 'react';
import { cn } from '../utilities/classNames';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
    const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            ref={ref}
            id={inputId}
            type="radio"
            className={cn(
              'w-4 h-4 rounded-full border border-gray-300 text-blue-600',
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

Radio.displayName = 'Radio';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      options,
      value,
      onChange,
      error = false,
      errorMessage,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
        {options.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            error={error}
          />
        ))}
        {error && errorMessage && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
