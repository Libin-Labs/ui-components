import React from 'react';

export interface UtilityComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Tooltip: React.FC<
  UtilityComponentProps & {
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
  }
> = ({
  content,
  position = 'top',
  className = '',
  children,
  ...props
}) => {
  const [visible, setVisible] = React.useState(false);

  const positionClass = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  }[position];

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      {...props}
    >
      {children}
      {visible && (
        <div
          className={`absolute ${positionClass} bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap z-50`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export const Popover: React.FC<
  UtilityComponentProps & {
    trigger: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
  }
> = ({
  trigger,
  position = 'bottom',
  className = '',
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);

  const positionClass = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  }[position];

  return (
    <div className="relative inline-block" {...props}>
      <button onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </button>
      {open && (
        <div className={`absolute ${positionClass} bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 min-w-max`}>
          {children}
        </div>
      )}
    </div>
  );
};

export const ContextMenu: React.FC<
  UtilityComponentProps & {
    items: Array<{ label: string; onClick: () => void; icon?: React.ReactNode }>;
  }
> = ({
  items,
  className = '',
  children,
  ...props
}) => {
  const [position, setPosition] = React.useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClose = () => setPosition(null);

  return (
    <div onContextMenu={handleContextMenu} className={className} {...props}>
      {children}
      {position && (
        <>
          <div className="fixed inset-0 z-40" onClick={handleClose}></div>
          <div
            className="fixed bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            style={{ top: position.y, left: position.x }}
          >
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.onClick();
                  handleClose();
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-sm"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const Notification: React.FC<
  UtilityComponentProps & {
    type?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    onClose?: () => void;
  }
> = ({
  type = 'info',
  title,
  onClose,
  className = '',
  children,
  ...props
}) => {
  const bgClass = {
    info: 'bg-blue-50 border-blue-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    error: 'bg-red-50 border-red-200',
  }[type];

  const iconClass = {
    info: '🔵',
    success: '✅',
    warning: '⚠️',
    error: '❌',
  }[type];

  return (
    <div className={`border-l-4 ${bgClass} p-4 rounded-md flex gap-3 ${className}`} {...props}>
      <span className="text-xl">{iconClass}</span>
      <div className="flex-1">
        {title && <h4 className="font-semibold">{title}</h4>}
        <p>{children}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      )}
    </div>
  );
};

export const Badge: React.FC<
  UtilityComponentProps & {
    variant?: 'solid' | 'outline' | 'dot';
    color?: 'blue' | 'green' | 'red' | 'yellow' | 'gray';
    count?: number | string;
  }
> = ({
  variant = 'solid',
  color = 'blue',
  count,
  className = '',
  children,
  ...props
}) => {
  const colorClass = {
    blue: 'bg-blue-600 text-white',
    green: 'bg-green-600 text-white',
    red: 'bg-red-600 text-white',
    yellow: 'bg-yellow-600 text-white',
    gray: 'bg-gray-600 text-white',
  };

  const variantClass = {
    solid: colorClass[color],
    outline: `border-2 border-${color}-600 text-${color}-600`,
    dot: `w-3 h-3 bg-${color}-600 rounded-full`,
  };

  return (
    <div className="relative inline-block" {...props}>
      {children}
      {count && (
        <span className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-semibold ${variantClass[variant]} ${className}`}>
          {count}
        </span>
      )}
    </div>
  );
};

export const Pill: React.FC<UtilityComponentProps & { onRemove?: () => void; color?: string }> = ({
  onRemove,
  color = 'blue',
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 bg-${color}-100 text-${color}-700 rounded-full text-sm ${className}`}
      {...props}
    >
      {children}
      {onRemove && (
        <button onClick={onRemove} className="ml-1 hover:text-${color}-900">
          ✕
        </button>
      )}
    </div>
  );
};

export const Tag: React.FC<
  UtilityComponentProps & {
    variant?: 'solid' | 'outline';
    color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  }
> = ({
  variant = 'solid',
  color = 'blue',
  className = '',
  children,
  ...props
}) => {
  const variantClass =
    variant === 'solid'
      ? `bg-${color}-600 text-white`
      : `border border-${color}-600 text-${color}-600`;

  return (
    <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${variantClass} ${className}`} {...props}>
      {children}
    </span>
  );
};

export const Chip: React.FC<
  UtilityComponentProps & {
    onDelete?: () => void;
    deletable?: boolean;
  }
> = ({
  onDelete,
  deletable = true,
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gray-200 text-gray-800 rounded-full text-sm ${className}`}
      {...props}
    >
      {children}
      {deletable && onDelete && (
        <button onClick={onDelete} className="hover:text-gray-900 font-bold">
          ×
        </button>
      )}
    </div>
  );
};

export const Counter: React.FC<
  UtilityComponentProps & {
    value: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
  }
> = ({
  value,
  onChange,
  min = 0,
  max = Infinity,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center gap-2 border border-gray-300 rounded-lg p-1 w-fit ${className}`} {...props}>
      <button
        onClick={() => onChange?.(Math.max(value - 1, min))}
        className="px-2 py-1 hover:bg-gray-100"
      >
        −
      </button>
      <span className="px-4">{value}</span>
      <button
        onClick={() => onChange?.(Math.min(value + 1, max))}
        className="px-2 py-1 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export const Flag: React.FC<
  UtilityComponentProps & {
    text?: string;
    color?: 'red' | 'yellow' | 'blue' | 'green';
  }
> = ({
  text,
  color = 'red',
  className = '',
  ...props
}) => {
  const bgClass = {
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
  }[color];

  return (
    <div className={`${bgClass} text-white text-xs font-semibold px-2 py-1 rounded inline-block ${className}`} {...props}>
      {text}
    </div>
  );
};
