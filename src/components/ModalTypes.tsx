import React from 'react';

export interface ModalTypeProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'fullscreen';
  animation?: 'fade' | 'slideUp' | 'slideDown' | 'zoom' | 'none';
  closeOnBackdrop?: boolean;
  children?: React.ReactNode;
}

const sizeClass = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  fullscreen: 'max-w-full h-screen',
};

const animationClass = {
  fade: 'animate-fade',
  slideUp: 'animate-slideUp',
  slideDown: 'animate-slideDown',
  zoom: 'animate-zoom',
  none: '',
};

export const ModalStandard: React.FC<ModalTypeProps> = ({
  isOpen,
  onClose,
  size = 'md',
  animation = 'fade',
  closeOnBackdrop = true,
  className = '',
  children,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        className={`bg-white rounded-lg shadow-2xl ${sizeClass[size]} ${animationClass[animation]} ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export const ModalAlert: React.FC<
  ModalTypeProps & {
    title?: string;
    message?: string;
    icon?: React.ReactNode;
  }
> = ({
  isOpen,
  onClose,
  size = 'sm',
  animation = 'zoom',
  closeOnBackdrop = true,
  title,
  message,
  icon,
  className = '',
  children,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        className={`bg-white rounded-lg shadow-2xl ${sizeClass[size]} ${animationClass[animation]} p-6 text-center ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {icon && <div className="mb-4 text-4xl">{icon}</div>}
        {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
        {message && <p className="text-gray-600 mb-6">{message}</p>}
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export const ModalConfirm: React.FC<
  ModalTypeProps & {
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    isDangerous?: boolean;
  }
> = ({
  isOpen,
  onClose,
  size = 'sm',
  animation = 'zoom',
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  isDangerous = false,
  className = '',
  children,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-2xl ${sizeClass[size]} ${animationClass[animation]} p-6 ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
        {message && <p className="text-gray-600 mb-6">{message}</p>}
        {children}
        <div className="mt-6 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm?.();
              onClose();
            }}
            className={`px-4 py-2 text-white rounded-lg ${isDangerous ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export const ModalSidebar: React.FC<
  ModalTypeProps & {
    position?: 'left' | 'right';
  }
> = ({
  isOpen,
  onClose,
  position = 'right',
  animation = 'slideUp',
  closeOnBackdrop = true,
  className = '',
  children,
  ...props
}) => {
  if (!isOpen) return null;

  const positionClass = position === 'left' ? 'left-0' : 'right-0';

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        className={`fixed ${positionClass} top-0 bottom-0 w-64 bg-white shadow-2xl ${animationClass[animation]} overflow-y-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export const ModalFullscreen: React.FC<
  ModalTypeProps & {
    title?: string;
  }
> = ({
  isOpen,
  onClose,
  animation = 'fade',
  title,
  className = '',
  children,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-white ${animationClass[animation]} overflow-y-auto ${className}`}
      {...props}
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          ✕
        </button>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export const ModalCentered: React.FC<ModalTypeProps> = ({
  isOpen,
  onClose,
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-2xl ${sizeClass[size]} p-6 ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export const ModalScrollable: React.FC<ModalTypeProps> = ({
  isOpen,
  onClose,
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-2xl ${sizeClass[size]} max-h-screen overflow-y-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
