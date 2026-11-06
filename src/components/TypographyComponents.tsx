import React from 'react';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  variant?: 'normal' | 'bold' | 'light' | 'italic' | 'truncated' | 'clamped';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error';
  align?: 'left' | 'center' | 'right' | 'justify';
}

const sizeClass = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
};

const variantClass = {
  normal: 'font-normal',
  bold: 'font-bold',
  light: 'font-light',
  italic: 'italic',
  truncated: 'truncate',
  clamped: 'line-clamp-3',
};

const colorClass = {
  default: 'text-gray-900',
  muted: 'text-gray-500',
  primary: 'text-blue-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600',
};

const alignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const Heading: React.FC<
  TypographyProps & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  }
> = ({
  level = 1,
  size,
  variant = 'bold',
  color = 'default',
  align = 'left',
  className = '',
  children,
  ...props
}) => {
  const defaultSize = {
    1: '3xl',
    2: '2xl',
    3: 'xl',
    4: 'lg',
    5: 'md',
    6: 'sm',
  }[level] as any;

  const Tag = `h${level}` as any;

  return (
    <Tag
      className={`${sizeClass[size || defaultSize]} ${variantClass[variant]} ${colorClass[color]} ${alignClass[align]} leading-tight ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export const Paragraph: React.FC<TypographyProps> = ({
  size = 'md',
  variant = 'normal',
  color = 'default',
  align = 'left',
  className = '',
  children,
  ...props
}) => {
  return (
    <p
      className={`${sizeClass[size]} ${variantClass[variant]} ${colorClass[color]} ${alignClass[align]} leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export const Quote: React.FC<TypographyProps> = ({
  size = 'lg',
  variant = 'italic',
  color = 'muted',
  className = '',
  children,
  ...props
}) => {
  return (
    <blockquote
      className={`${sizeClass[size]} ${variantClass[variant]} ${colorClass[color]} border-l-4 border-blue-600 pl-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </blockquote>
  );
};

export const Code: React.FC<
  TypographyProps & {
    inline?: boolean;
  }
> = ({
  size = 'sm',
  color = 'error',
  inline = true,
  className = '',
  children,
  ...props
}) => {
  if (inline) {
    return (
      <code
        className={`${sizeClass[size]} ${colorClass[color]} bg-gray-100 px-1.5 py-0.5 rounded font-mono ${className}`}
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <pre
      className={`${sizeClass[size]} ${colorClass[color]} bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto font-mono ${className}`}
      {...props}
    >
      <code>{children}</code>
    </pre>
  );
};

export const Label: React.FC<
  TypographyProps & {
    required?: boolean;
  }
> = ({
  size = 'sm',
  variant = 'bold',
  required = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <label className={`${sizeClass[size]} ${variantClass[variant]} text-gray-700 block ${className}`} {...props}>
      {children}
      {required && <span className="text-red-600 ml-1">*</span>}
    </label>
  );
};

export const Caption: React.FC<TypographyProps> = ({
  size = 'xs',
  color = 'muted',
  className = '',
  children,
  ...props
}) => {
  return (
    <small className={`${sizeClass[size]} ${colorClass[color]} block ${className}`} {...props}>
      {children}
    </small>
  );
};

export const Badge: React.FC<
  TypographyProps & {
    variant?: 'solid' | 'outline' | 'soft';
    colorScheme?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray';
  }
> = ({
  size = 'sm',
  variant = 'solid',
  colorScheme = 'blue',
  className = '',
  children,
  ...props
}) => {
  const variantStyles = {
    solid: {
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      red: 'bg-red-600 text-white',
      yellow: 'bg-yellow-600 text-white',
      purple: 'bg-purple-600 text-white',
      gray: 'bg-gray-600 text-white',
    },
    outline: {
      blue: 'border border-blue-600 text-blue-600',
      green: 'border border-green-600 text-green-600',
      red: 'border border-red-600 text-red-600',
      yellow: 'border border-yellow-600 text-yellow-600',
      purple: 'border border-purple-600 text-purple-600',
      gray: 'border border-gray-600 text-gray-600',
    },
    soft: {
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      red: 'bg-red-100 text-red-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      purple: 'bg-purple-100 text-purple-700',
      gray: 'bg-gray-100 text-gray-700',
    },
  };

  return (
    <span
      className={`${sizeClass[size]} ${variantStyles[variant][colorScheme]} px-2.5 py-0.5 rounded-full font-medium inline-block ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export const Text: React.FC<TypographyProps> = ({
  size = 'md',
  variant = 'normal',
  color = 'default',
  align = 'left',
  className = '',
  children,
  ...props
}) => {
  return (
    <span
      className={`${sizeClass[size]} ${variantClass[variant]} ${colorClass[color]} ${alignClass[align]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export const Truncated: React.FC<TypographyProps & { lines?: number }> = ({
  lines = 1,
  className = '',
  children,
  ...props
}) => {
  return (
    <p className={`line-clamp-${lines} ${className}`} {...props}>
      {children}
    </p>
  );
};
