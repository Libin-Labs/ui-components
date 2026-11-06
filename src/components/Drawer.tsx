import React, { useEffect } from 'react';
import { cn } from '../utilities/classNames';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  width?: string;
  height?: string;
  closeButton?: boolean;
  overlay?: boolean;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerSlot?: React.ReactNode;
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      title,
      children,
      position = 'left',
      width = 'w-96',
      height = 'h-96',
      closeButton = true,
      overlay = true,
      className,
      headerClassName,
      bodyClassName,
      footerSlot,
    },
    ref
  ) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

    const positionClasses = {
      left: 'left-0 top-0 h-full',
      right: 'right-0 top-0 h-full',
      top: 'top-0 left-0 w-full',
      bottom: 'bottom-0 left-0 w-full',
    };

    const widthClasses = {
      left: width,
      right: width,
      top: width !== 'w-96' ? width : 'w-full',
      bottom: width !== 'w-96' ? width : 'w-full',
    };

    const heightClasses = {
      left: 'h-full',
      right: 'h-full',
      top: height,
      bottom: height,
    };

    const slideInClasses = {
      left: 'translate-x-0 -translate-x-full',
      right: '-translate-x-0 translate-x-full',
      top: 'translate-y-0 -translate-y-full',
      bottom: 'translate-y-0 translate-y-full',
    };

    if (!isOpen) return null;

    return (
      <>
        {/* Overlay */}
        {overlay && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-in fade-in duration-300"
            onClick={onClose}
          />
        )}

        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            'fixed bg-white shadow-lg transition-transform duration-300 z-50',
            'animate-in',
            positionClasses[position],
            widthClasses,
            heightClasses,
            isOpen ? slideInClasses[position].split(' ')[0] : slideInClasses[position].split(' ')[1],
            className
          )}
        >
          {/* Header */}
          {(title || closeButton) && (
            <div
              className={cn(
                'flex items-center justify-between p-4 border-b border-gray-200',
                headerClassName
              )}
            >
              {title && <h2 className="text-lg font-semibold text-gray-900">{title}</h2>}
              {closeButton && (
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
                  aria-label="Close drawer"
                >
                  ×
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className={cn('flex-1 overflow-y-auto p-4', bodyClassName)}>
            {children}
          </div>

          {/* Footer */}
          {footerSlot && (
            <div className="border-t border-gray-200 p-4">
              {footerSlot}
            </div>
          )}
        </div>
      </>
    );
  }
);

Drawer.displayName = 'Drawer';
