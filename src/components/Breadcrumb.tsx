import React from 'react';
import { cn } from '../utilities/classNames';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLNavElement> {
  items: Array<{ label: string; href?: string }>;
  separator?: string;
}

export const Breadcrumb = React.forwardRef<HTMLNavElement, BreadcrumbProps>(
  (
    {
      items,
      separator = '/',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        className={cn('', className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-700">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="text-gray-400">{separator}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';
