import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../utilities/classNames';

export interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
  submenu?: MenuItemProps[];
  className?: string;
}

export interface MenuProps {
  items: MenuItemProps[];
  trigger: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  menuClassName?: string;
}

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps & { onClose?: () => void }>(
  (
    {
      label,
      icon,
      onClick,
      disabled = false,
      divider = false,
      submenu,
      className,
      onClose,
    },
    ref
  ) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);

    if (divider) {
      return <div ref={ref} className="my-1 border-t border-gray-200" />;
    }

    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => {
            if (submenu) {
              setSubmenuOpen(!submenuOpen);
            } else {
              onClick?.();
              onClose?.();
            }
          }}
          disabled={disabled}
          className={cn(
            'w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors',
            {
              'text-gray-700 hover:bg-gray-100': !disabled,
              'text-gray-400 cursor-not-allowed': disabled,
            },
            className
          )}
        >
          {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
          <span className="flex-1">{label}</span>
          {submenu && (
            <span className={cn('transition-transform', { 'rotate-180': submenuOpen })}>
              ▼
            </span>
          )}
        </button>

        {submenu && submenuOpen && (
          <div
            ref={submenuRef}
            className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-max"
          >
            {submenu.map((item, index) => (
              <MenuItem key={index} {...item} onClose={onClose} />
            ))}
          </div>
        )}
      </div>
    );
  }
);

MenuItem.displayName = 'MenuItem';

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      items,
      trigger,
      position = 'bottom',
      className,
      menuClassName,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          menuRef.current &&
          triggerRef.current &&
          !menuRef.current.contains(e.target as Node) &&
          !triggerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }
    }, [isOpen]);

    const positionClasses = {
      top: 'bottom-full mb-2',
      bottom: 'top-full mt-2',
      left: 'right-full mr-2',
      right: 'left-full ml-2',
    };

    return (
      <div ref={ref} className={cn('relative inline-block', className)}>
        <div
          ref={triggerRef}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
          {trigger}
        </div>

        {isOpen && (
          <div
            ref={menuRef}
            className={cn(
              'absolute z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-max',
              positionClasses[position],
              menuClassName
            )}
          >
            {items.map((item, index) => (
              <MenuItem
                key={index}
                {...item}
                onClose={() => setIsOpen(false)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Menu.displayName = 'Menu';

export { MenuItem };
