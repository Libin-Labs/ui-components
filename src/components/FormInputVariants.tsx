import React from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled' | 'flushed';
  state?: 'default' | 'focus' | 'error' | 'success' | 'disabled';
  label?: string;
  error?: string;
  helpText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  icon?: React.ReactNode;
}

const baseSizeClass = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const baseVariantClass = {
  default: 'border border-gray-300 bg-white',
  outline: 'border-2 border-gray-300 bg-white',
  filled: 'bg-gray-100 border-b-2 border-gray-300',
  flushed: 'bg-transparent border-b-2 border-gray-300',
};

const baseStateClass = {
  default: 'text-gray-900',
  focus: 'border-blue-500 outline-none',
  error: 'border-red-500 text-red-600',
  success: 'border-green-500 text-green-600',
  disabled: 'bg-gray-50 text-gray-400 cursor-not-allowed',
};

export const InputText: React.FC<FormInputProps> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  prefix,
  suffix,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative flex items-center">
        {prefix && <span className="absolute left-3 text-gray-500">{prefix}</span>}
        <input
          type="text"
          className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} ${prefix ? 'pl-10' : ''} ${suffix ? 'pr-10' : ''} ${className}`}
          {...props}
        />
        {suffix && <span className="absolute right-3 text-gray-500">{suffix}</span>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};

export const InputEmail: React.FC<FormInputProps> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  prefix,
  suffix,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative flex items-center">
        {prefix && <span className="absolute left-3 text-gray-500">{prefix}</span>}
        <input
          type="email"
          className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} ${prefix ? 'pl-10' : ''} ${suffix ? 'pr-10' : ''} ${className}`}
          {...props}
        />
        {suffix && <span className="absolute right-3 text-gray-500">{suffix}</span>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};

export const InputPassword: React.FC<FormInputProps & { showPassword?: boolean; onTogglePassword?: () => void }> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  prefix,
  showPassword = false,
  onTogglePassword,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative flex items-center">
        {prefix && <span className="absolute left-3 text-gray-500">{prefix}</span>}
        <input
          type={showPassword ? 'text' : 'password'}
          className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} ${prefix ? 'pl-10' : ''} pr-10 ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};

export const InputNumber: React.FC<FormInputProps> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  prefix,
  suffix,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative flex items-center">
        {prefix && <span className="absolute left-3 text-gray-500">{prefix}</span>}
        <input
          type="number"
          className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} ${prefix ? 'pl-10' : ''} ${suffix ? 'pr-10' : ''} ${className}`}
          {...props}
        />
        {suffix && <span className="absolute right-3 text-gray-500">{suffix}</span>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};

export const InputDate: React.FC<FormInputProps> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        type="date"
        className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};

export const InputTime: React.FC<FormInputProps> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        type="time"
        className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};

export const InputTel: React.FC<FormInputProps> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  prefix,
  suffix,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative flex items-center">
        {prefix && <span className="absolute left-3 text-gray-500">{prefix}</span>}
        <input
          type="tel"
          className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} ${prefix ? 'pl-10' : ''} ${suffix ? 'pr-10' : ''} ${className}`}
          {...props}
        />
        {suffix && <span className="absolute right-3 text-gray-500">{suffix}</span>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};

export const InputUrl: React.FC<FormInputProps> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  prefix,
  suffix,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative flex items-center">
        {prefix && <span className="absolute left-3 text-gray-500">{prefix}</span>}
        <input
          type="url"
          className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} ${prefix ? 'pl-10' : ''} ${suffix ? 'pr-10' : ''} ${className}`}
          {...props}
        />
        {suffix && <span className="absolute right-3 text-gray-500">{suffix}</span>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};

export const InputSearch: React.FC<FormInputProps & { onSearch?: (value: string) => void }> = ({
  size = 'md',
  variant = 'default',
  state = 'default',
  label,
  error,
  helpText,
  onSearch,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative flex items-center">
        <span className="absolute left-3 text-gray-500">🔍</span>
        <input
          type="search"
          className={`w-full rounded-lg transition-colors ${baseSizeClass[size]} ${baseVariantClass[variant]} ${baseStateClass[state]} pl-10 ${className}`}
          onChange={(e) => onSearch?.(e.target.value)}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-sm mt-1">{helpText}</p>}
    </div>
  );
};
