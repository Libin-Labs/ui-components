import React from 'react';
import { cn } from '../utilities/classNames';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  underline?: 'always' | 'hover' | 'none';
  external?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      children,
      variant = 'primary',
      underline = 'hover',
      external = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary: 'text-blue-600 hover:text-blue-800',
      secondary: 'text-gray-600 hover:text-gray-800',
      danger: 'text-red-600 hover:text-red-800',
      success: 'text-green-600 hover:text-green-800',
    };

    const underlineClasses = {
      always: 'underline',
      hover: 'hover:underline',
      none: 'no-underline',
    };

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(
          'transition-colors font-medium',
          variantClasses[variant],
          underlineClasses[underline],
          {
            'opacity-50 cursor-not-allowed': disabled,
            'cursor-pointer': !disabled,
          },
          className
        )}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}
        {...props}
      >
        {children}
        {external && <span className="ml-1">↗</span>}
      </a>
    );
  }
);

Link.displayName = 'Link';
