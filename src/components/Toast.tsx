import React, { useEffect } from 'react';
import { cn } from '../utilities/classNames';

export interface ToastProps {
  id?: string;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  icon?: React.ReactNode;
}

export interface ToastContextType {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, 'id'>) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

export const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

const Toast = React.forwardRef<HTMLDivElement, ToastProps & { onClose: () => void }>(
  (
    {
      title,
      description,
      type = 'info',
      action,
      onClose,
      className,
      icon,
    },
    ref
  ) => {
    const typeStyles = {
      success: 'bg-green-50 border-green-200 text-green-900',
      error: 'bg-red-50 border-red-200 text-red-900',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
      info: 'bg-blue-50 border-blue-200 text-blue-900',
    };

    const iconMap = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ',
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'rounded-lg border-l-4 p-4 shadow-lg flex gap-3 items-start max-w-md',
          'animate-in fade-in slide-in-from-top-2 duration-300',
          typeStyles[type],
          className
        )}
      >
        <div className="text-xl font-bold flex-shrink-0">
          {icon || iconMap[type]}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold">{title}</h3>
          {description && (
            <p className="text-sm mt-1 opacity-90">{description}</p>
          )}
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {action && (
            <button
              onClick={action.onClick}
              className="text-sm font-medium hover:underline"
            >
              {action.label}
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xl font-bold hover:opacity-70 transition-opacity"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast: ToastProps = { ...toast, id };

    setToasts((prev) => [...prev, newToast]);

    if (toast.duration !== 0) {
      setTimeout(() => removeToast(id), toast.duration ?? 5000);
    }

    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const clearAll = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearAll }}>
      {children}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast
              {...toast}
              onClose={() => removeToast(toast.id!)}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = 'ToastProvider';

export { Toast };
