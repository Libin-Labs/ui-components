import React from 'react';

export interface CardVariantProps extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: 'none' | 'lift' | 'glow' | 'scale';
  border?: boolean;
  children?: React.ReactNode;
}

const shadowClass = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-2xl',
};

const paddingClass = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
};

const hoverClass = {
  none: '',
  lift: 'hover:shadow-lg hover:-translate-y-1 transition-all',
  glow: 'hover:shadow-lg hover:ring-2 hover:ring-blue-400 transition-all',
  scale: 'hover:scale-105 transition-transform',
};

export const CardBasic: React.FC<CardVariantProps> = ({
  shadow = 'md',
  padding = 'md',
  hoverEffect = 'lift',
  border = true,
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`rounded-lg bg-white ${shadowClass[shadow]} ${paddingClass[padding]} ${hoverClass[hoverEffect]} ${border ? 'border border-gray-200' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardImage: React.FC<
  CardVariantProps & {
    image?: string;
    imageAlt?: string;
    imageHeight?: 'sm' | 'md' | 'lg';
  }
> = ({
  shadow = 'md',
  padding = 'md',
  hoverEffect = 'lift',
  image,
  imageAlt = '',
  imageHeight = 'md',
  border = true,
  className = '',
  children,
  ...props
}) => {
  const heightClass = {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64',
  }[imageHeight];

  return (
    <div
      className={`rounded-lg overflow-hidden bg-white ${shadowClass[shadow]} ${border ? 'border border-gray-200' : ''} ${hoverClass[hoverEffect]} ${className}`}
      {...props}
    >
      {image && (
        <div className={`${heightClass} w-full overflow-hidden bg-gray-200`}>
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )}
      <div className={paddingClass[padding]}>{children}</div>
    </div>
  );
};

export const CardHorizontal: React.FC<
  CardVariantProps & {
    image?: string;
    imageAlt?: string;
    imageWidth?: 'sm' | 'md' | 'lg';
  }
> = ({
  shadow = 'md',
  padding = 'md',
  hoverEffect = 'lift',
  image,
  imageAlt = '',
  imageWidth = 'md',
  border = true,
  className = '',
  children,
  ...props
}) => {
  const widthClass = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
  }[imageWidth];

  return (
    <div
      className={`rounded-lg flex items-stretch bg-white ${shadowClass[shadow]} ${border ? 'border border-gray-200' : ''} ${hoverClass[hoverEffect]} ${className}`}
      {...props}
    >
      {image && (
        <div className={`${widthClass} flex-shrink-0 overflow-hidden bg-gray-200`}>
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )}
      <div className={paddingClass[padding]}>{children}</div>
    </div>
  );
};

export const CardExpanding: React.FC<CardVariantProps & { expandable?: boolean }> = ({
  shadow = 'md',
  padding = 'md',
  hoverEffect = 'glow',
  expandable = true,
  border = true,
  className = '',
  children,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className={`rounded-lg bg-white ${shadowClass[shadow]} ${paddingClass[padding]} ${hoverClass[hoverEffect]} ${border ? 'border border-gray-200' : ''} cursor-pointer transition-all ${className}`}
      onClick={() => expandable && setIsExpanded(!isExpanded)}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className={isExpanded ? '' : 'line-clamp-2'}>{children}</div>
        {expandable && <span className="ml-4">{isExpanded ? '▼' : '▶'}</span>}
      </div>
    </div>
  );
};

export const CardInteractive: React.FC<
  CardVariantProps & {
    onClick?: () => void;
    isActive?: boolean;
  }
> = ({
  shadow = 'md',
  padding = 'md',
  hoverEffect = 'scale',
  onClick,
  isActive = false,
  border = true,
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`rounded-lg bg-white ${shadowClass[shadow]} ${paddingClass[padding]} ${hoverClass[hoverEffect]} ${border ? 'border' : ''} ${isActive ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'} cursor-pointer transition-all ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardGradient: React.FC<
  CardVariantProps & {
    gradient?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';
  }
> = ({
  shadow = 'md',
  padding = 'md',
  gradient = 'blue',
  border = true,
  className = '',
  children,
  ...props
}) => {
  const gradientClass = {
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    green: 'from-green-400 to-green-600',
    orange: 'from-orange-400 to-orange-600',
    pink: 'from-pink-400 to-pink-600',
  }[gradient];

  return (
    <div
      className={`rounded-lg bg-gradient-to-br ${gradientClass} ${paddingClass[padding]} ${shadowClass[shadow]} text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardMinimal: React.FC<CardVariantProps> = ({
  padding = 'md',
  border = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`rounded-lg bg-white ${paddingClass[padding]} ${border ? 'border border-gray-200' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardBordered: React.FC<
  CardVariantProps & {
    borderColor?: 'blue' | 'green' | 'red' | 'yellow' | 'gray';
    borderSize?: 'sm' | 'md' | 'lg';
  }
> = ({
  shadow = 'sm',
  padding = 'md',
  borderColor = 'gray',
  borderSize = 'md',
  className = '',
  children,
  ...props
}) => {
  const borderColorClass = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
    gray: 'border-gray-300',
  }[borderColor];

  const borderSizeClass = {
    sm: 'border-2',
    md: 'border-4',
    lg: 'border-8',
  }[borderSize];

  return (
    <div
      className={`rounded-lg bg-white ${shadowClass[shadow]} ${paddingClass[padding]} ${borderSizeClass} ${borderColorClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
