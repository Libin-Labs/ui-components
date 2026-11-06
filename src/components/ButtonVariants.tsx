import React from 'react';

export interface ButtonVariantProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  state?: 'default' | 'hover' | 'focus' | 'active' | 'disabled';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

export const ButtonPrimary: React.FC<ButtonVariantProps> = ({
  size = 'md',
  state = 'default',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const sizeClass = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }[size];

  const stateClass = {
    default: 'bg-blue-600 text-white',
    hover: 'bg-blue-700 text-white',
    focus: 'bg-blue-800 text-white outline outline-2 outline-offset-2 outline-blue-300',
    active: 'bg-blue-900 text-white',
    disabled: 'bg-gray-400 text-gray-600 cursor-not-allowed',
  }[state];

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-colors ${sizeClass} ${stateClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export const ButtonSecondary: React.FC<ButtonVariantProps> = ({
  size = 'md',
  state = 'default',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const sizeClass = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }[size];

  const stateClass = {
    default: 'bg-gray-200 text-gray-900',
    hover: 'bg-gray-300 text-gray-900',
    focus: 'bg-gray-400 text-gray-900 outline outline-2 outline-offset-2 outline-gray-300',
    active: 'bg-gray-500 text-white',
    disabled: 'bg-gray-100 text-gray-400 cursor-not-allowed',
  }[state];

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-colors ${sizeClass} ${stateClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export const ButtonOutline: React.FC<ButtonVariantProps> = ({
  size = 'md',
  state = 'default',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const sizeClass = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }[size];

  const stateClass = {
    default: 'border-2 border-blue-600 text-blue-600 bg-white',
    hover: 'border-2 border-blue-700 text-blue-700 bg-blue-50',
    focus: 'border-2 border-blue-800 text-blue-800 bg-blue-50 outline outline-2 outline-offset-2 outline-blue-300',
    active: 'border-2 border-blue-900 text-white bg-blue-900',
    disabled: 'border-2 border-gray-300 text-gray-400 bg-white cursor-not-allowed',
  }[state];

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-colors ${sizeClass} ${stateClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export const ButtonGhost: React.FC<ButtonVariantProps> = ({
  size = 'md',
  state = 'default',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const sizeClass = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }[size];

  const stateClass = {
    default: 'bg-transparent text-gray-700 hover:bg-gray-100',
    hover: 'bg-gray-100 text-gray-900',
    focus: 'bg-gray-200 text-gray-900 outline outline-2 outline-offset-2 outline-gray-300',
    active: 'bg-gray-300 text-gray-900',
    disabled: 'text-gray-400 cursor-not-allowed',
  }[state];

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-colors ${sizeClass} ${stateClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export const ButtonLink: React.FC<ButtonVariantProps> = ({
  size = 'md',
  state = 'default',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const sizeClass = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  }[size];

  const stateClass = {
    default: 'bg-transparent text-blue-600 underline',
    hover: 'bg-transparent text-blue-700 underline',
    focus: 'bg-transparent text-blue-800 underline outline outline-2 outline-offset-2 outline-blue-300',
    active: 'bg-transparent text-blue-900',
    disabled: 'text-gray-400 cursor-not-allowed no-underline',
  }[state];

  return (
    <button
      className={`inline-flex items-center gap-2 font-medium transition-colors ${sizeClass} ${stateClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export const ButtonIcon: React.FC<ButtonVariantProps> = ({
  size = 'md',
  state = 'default',
  icon,
  className = '',
  ...props
}) => {
  const sizeClass = {
    xs: 'p-1 text-xs',
    sm: 'p-1.5 text-sm',
    md: 'p-2 text-base',
    lg: 'p-3 text-lg',
    xl: 'p-4 text-xl',
  }[size];

  const stateClass = {
    default: 'bg-white text-gray-700 border border-gray-300',
    hover: 'bg-gray-100 text-gray-900 border border-gray-400',
    focus: 'bg-white text-gray-900 border border-gray-500 outline outline-2 outline-offset-2 outline-blue-300',
    active: 'bg-gray-200 text-gray-900',
    disabled: 'bg-gray-50 text-gray-300 border border-gray-200 cursor-not-allowed',
  }[state];

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg transition-colors ${sizeClass} ${stateClass} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};

export const ButtonLoading: React.FC<ButtonVariantProps & { loading?: boolean }> = ({
  size = 'md',
  state = 'default',
  icon,
  loading = false,
  children,
  className = '',
  ...props
}) => {
  const sizeClass = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }[size];

  const baseClass = loading
    ? 'bg-blue-600 text-white cursor-wait opacity-75'
    : 'bg-blue-600 text-white hover:bg-blue-700';

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-colors ${sizeClass} ${baseClass} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading && <span className="animate-spin">⌛</span>}
      {!loading && icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
