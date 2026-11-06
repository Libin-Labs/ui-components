import React from 'react';
import { cn } from '../utilities/classNames';

export interface NavbarProps extends React.HTMLAttributes<HTMLNavElement> {
  brand?: React.ReactNode;
  fluid?: boolean;
}

export const Navbar = React.forwardRef<HTMLNavElement, NavbarProps>(
  (
    {
      brand,
      fluid = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'bg-white border-b border-gray-200 shadow-sm',
          className,
        )}
        {...props}
      >
        <div className={cn('px-4 py-4', !fluid && 'max-w-7xl mx-auto')}>
          <div className="flex items-center justify-between">
            {brand && (
              <div className="flex-shrink-0 font-bold text-xl">
                {brand}
              </div>
            )}
            <div className="flex items-center gap-4">
              {children}
            </div>
          </div>
        </div>
      </nav>
    );
  },
);

Navbar.displayName = 'Navbar';

export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  children: React.ReactNode;
}

export const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
  (
    {
      href,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    if (href) {
      return (
        <a
          href={href}
          className={cn(
            'flex-shrink-0 font-bold text-xl hover:opacity-80 transition-opacity',
            className,
          )}
          {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('flex-shrink-0 font-bold text-xl', className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

NavbarBrand.displayName = 'NavbarBrand';

export interface NavbarNavProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export const NavbarNav = React.forwardRef<HTMLUListElement, NavbarNavProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <ul
      ref={ref}
      className={cn('flex items-center gap-6 list-none', className)}
      {...props}
    >
      {children}
    </ul>
  ),
);

NavbarNav.displayName = 'NavbarNav';

export interface NavbarItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
  children: React.ReactNode;
}

export const NavbarItem = React.forwardRef<HTMLLIElement, NavbarItemProps>(
  (
    {
      active = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <li
      ref={ref}
      className={cn(
        'text-gray-700 hover:text-gray-900 transition-colors',
        active && 'font-semibold text-blue-600 border-b-2 border-blue-600 pb-1',
        className,
      )}
      {...props}
    >
      {children}
    </li>
  ),
);

NavbarItem.displayName = 'NavbarItem';

export interface NavbarToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
}

export const NavbarToggle = React.forwardRef<HTMLButtonElement, NavbarToggleProps>(
  (
    {
      open = false,
      className,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={cn(
        'md:hidden text-gray-700 hover:text-gray-900 transition-colors',
        className,
      )}
      aria-label="Toggle navigation"
      {...props}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
          open
            ? "M6 18L18 6M6 6l12 12"
            : "M4 6h16M4 12h16M4 18h16"
        } />
      </svg>
    </button>
  ),
);

NavbarToggle.displayName = 'NavbarToggle';
