import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../utilities/classNames';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      trigger,
      open: controlledOpen,
      onOpenChange,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(controlledOpen ?? false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const open = controlledOpen ?? isOpen;

    const handleToggle = () => {
      const newOpen = !open;
      setIsOpen(newOpen);
      onOpenChange?.(newOpen);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          onOpenChange?.(false);
        }
      };

      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [open, onOpenChange]);

    return (
      <div
        ref={ref || dropdownRef}
        className={cn('relative inline-block', className)}
        {...props}
      >
        <button
          onClick={handleToggle}
          className="flex items-center gap-2"
          aria-haspopup="true"
          aria-expanded={open}
        >
          {trigger}
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-2 min-w-max bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {children}
          </div>
        )}
      </div>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  divider?: boolean;
}

export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  (
    {
      icon,
      divider,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    if (divider) {
      return <div className="border-t border-gray-100" />;
    }

    return (
      <button
        ref={ref}
        className={cn(
          'w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors',
          'flex items-center gap-2',
          className,
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </button>
    );
  },
);

DropdownItem.displayName = 'DropdownItem';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn('py-1', className)}
      {...props}
    >
      {children}
    </div>
  ),
);

DropdownMenu.displayName = 'DropdownMenu';
