import React, { useState } from 'react';
import { cn } from '../utilities/classNames';

export interface SidebarItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  subItems?: SidebarItemProps[];
}

export interface SidebarProps {
  items: SidebarItemProps[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  width?: string;
  onItemClick?: (item: SidebarItemProps, index: number) => void;
  className?: string;
  headerSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
}

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps & { onClick?: () => void; level?: number }>(
  (
    {
      label,
      icon,
      active = false,
      badge,
      onClick,
      children,
      subItems,
      className,
      level = 0,
    },
    ref
  ) => {
    const [expanded, setExpanded] = useState(false);
    const hasChildren = (subItems && subItems.length > 0) || children;

    return (
      <div ref={ref}>
        <div
          onClick={() => {
            if (hasChildren) setExpanded(!expanded);
            onClick?.();
          }}
          className={cn(
            'flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors',
            {
              'bg-blue-50 text-blue-700 font-medium': active,
              'text-gray-700 hover:bg-gray-50': !active,
            },
            className,
            `pl-${level * 4 + 4}`
          )}
        >
          {icon && <span className="w-5 h-5 flex-shrink-0">{icon}</span>}
          <span className="flex-1">{label}</span>
          {badge && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {badge}
            </span>
          )}
          {hasChildren && (
            <span
              className={cn(
                'transition-transform',
                {
                  'rotate-180': expanded,
                }
              )}
            >
              ▼
            </span>
          )}
        </div>

        {expanded && (
          <div className="bg-gray-50">
            {subItems?.map((subItem, index) => (
              <SidebarItem
                key={index}
                {...subItem}
                level={(level || 0) + 1}
              />
            ))}
            {children}
          </div>
        )}
      </div>
    );
  }
);

SidebarItem.displayName = 'SidebarItem';

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      items,
      collapsible = true,
      defaultCollapsed = false,
      width = 'w-64',
      onItemClick,
      className,
      headerSlot,
      footerSlot,
    },
    ref
  ) => {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);

    return (
      <aside
        ref={ref}
        className={cn(
          'bg-white border-r border-gray-200 transition-all duration-300 overflow-y-auto flex flex-col h-screen',
          {
            [width]: !collapsed,
            'w-20': collapsed,
          },
          className
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          {collapsed ? (
            <div className="text-2xl font-bold text-blue-600">≡</div>
          ) : (
            <div className="flex items-center justify-between">
              {headerSlot || <h1 className="text-lg font-bold text-gray-900">Menu</h1>}
              {collapsible && (
                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Toggle sidebar"
                >
                  ≡
                </button>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <nav className="flex-1 overflow-y-auto">
          {items.map((item, index) => (
            <SidebarItem
              key={index}
              {...item}
              onClick={() => onItemClick?.(item, index)}
              className={collapsed ? 'justify-center px-2' : undefined}
            />
          ))}
        </nav>

        {/* Footer */}
        {footerSlot && (
          <div className="border-t border-gray-200 p-4">
            {footerSlot}
          </div>
        )}
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export { SidebarItem };
