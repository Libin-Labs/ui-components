import React from 'react';
import { cn } from '../utilities/classNames';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  layout?: 'vertical' | 'horizontal' | 'grid';
  className?: string;
  children: React.ReactNode;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      onSubmit,
      layout = 'vertical',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const layoutClasses = {
      vertical: 'flex flex-col gap-4',
      horizontal: 'flex flex-row gap-4',
      grid: 'grid grid-cols-2 gap-4',
    };

    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className={cn(layoutClasses[layout], className)}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = 'Form';
