import React from 'react';
import { cn } from '../utilities/classNames';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultTab, onTabChange, children, className, ...props }, ref) => {
    const [activeTab, setActiveTab] = React.useState(defaultTab);

    const handleTabChange = (tabId: string) => {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    };

    return (
      <div ref={ref} className={cn('', className)} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              activeTab,
              onTabChange: handleTabChange,
            });
          }
          return child;
        })}
      </div>
    );
  },
);

Tabs.displayName = 'Tabs';

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex border-b border-gray-200 gap-1', className)}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  ),
);

TabList.displayName = 'TabList';

export interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export const TabTrigger = React.forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({ value, activeTab, onTabChange, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'px-4 py-2 font-medium border-b-2 transition-colors',
        activeTab === value
          ? 'border-blue-600 text-blue-600'
          : 'border-transparent text-gray-600 hover:text-gray-900',
        className,
      )}
      onClick={() => onTabChange?.(value)}
      role="tab"
      aria-selected={activeTab === value}
      {...props}
    />
  ),
);

TabTrigger.displayName = 'TabTrigger';

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  activeTab?: string;
}

export const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  ({ value, activeTab, className, children, ...props }, ref) => {
    if (activeTab !== value) return null;

    return (
      <div
        ref={ref}
        className={cn('py-4', className)}
        role="tabpanel"
        {...props}
      >
        {children}
      </div>
    );
  },
);

TabContent.displayName = 'TabContent';
