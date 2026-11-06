import React from 'react';
import { cn } from '../utilities/classNames';

export interface FormGroupProps {
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
  layout?: 'vertical' | 'horizontal';
}

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  (
    {
      label,
      required = false,
      error = false,
      errorMessage,
      helperText,
      children,
      className,
      layout = 'vertical',
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          {
            'flex flex-col gap-1': layout === 'vertical',
            'flex items-start gap-4': layout === 'horizontal',
          },
          className
        )}
      >
        {label && (
          <label className={cn('block text-sm font-medium text-gray-700', { 'text-red-600': error })}>
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <div className="w-full">{children}</div>
        {error && errorMessage && (
          <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
        )}
        {!error && helperText && (
          <p className="text-sm text-gray-500 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

FormGroup.displayName = 'FormGroup';
