import React from 'react';

export interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  submenu?: NavItem[];
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[];
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'pills' | 'minimal';
  onItemClick?: (item: NavItem) => void;
}

export const NavHorizontal: React.FC<NavigationProps> = ({
  items,
  size = 'md',
  variant = 'default',
  onItemClick,
  className = '',
  ...props
}) => {
  const sizeClass = { sm: 'px-2 py-1 text-sm', md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg' }[size];

  return (
    <nav className={`flex gap-4 ${className}`} {...props}>
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onItemClick?.(item)}
          className={`flex items-center gap-2 rounded ${sizeClass} transition-colors ${item.active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          {item.icon}
          {item.label}
          {item.badge && <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>}
        </button>
      ))}
    </nav>
  );
};

export const NavVertical: React.FC<NavigationProps> = ({
  items,
  size = 'md',
  variant = 'default',
  onItemClick,
  className = '',
  ...props
}) => {
  const sizeClass = { sm: 'px-3 py-2 text-sm', md: 'px-4 py-3 text-base', lg: 'px-6 py-4 text-lg' }[size];

  return (
    <nav className={`flex flex-col gap-1 ${className}`} {...props}>
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onItemClick?.(item)}
          className={`w-full text-left flex items-center gap-2 rounded ${sizeClass} transition-colors ${item.active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          {item.icon}
          {item.label}
          {item.badge && <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>}
        </button>
      ))}
    </nav>
  );
};

export const NavTabs: React.FC<NavigationProps> = ({
  items,
  onItemClick,
  className = '',
  ...props
}) => {
  return (
    <nav className={`flex border-b border-gray-200 gap-1 ${className}`} {...props}>
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onItemClick?.(item)}
          className={`px-6 py-3 border-b-2 transition-colors font-medium ${item.active ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export const NavPills: React.FC<NavigationProps> = ({
  items,
  onItemClick,
  className = '',
  ...props
}) => {
  return (
    <nav className={`flex gap-2 flex-wrap ${className}`} {...props}>
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onItemClick?.(item)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${item.active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export const NavBreadcrumbs: React.FC<NavigationProps> = ({
  items,
  onItemClick,
  className = '',
  ...props
}) => {
  return (
    <nav className={`flex items-center gap-2 ${className}`} {...props}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <button
            onClick={() => onItemClick?.(item)}
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            {item.label}
          </button>
          {idx < items.length - 1 && <span className="text-gray-400">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export const NavSteps: React.FC<
  NavigationProps & {
    currentStep?: number;
  }
> = ({
  items,
  currentStep = 0,
  onItemClick,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`} {...props}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${idx <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              {idx + 1}
            </div>
            <span className="text-sm text-gray-600">{item.label}</span>
          </div>
          {idx < items.length - 1 && (
            <div
              className={`flex-1 h-1 ${idx < currentStep ? 'bg-blue-600' : 'bg-gray-200'}`}
              style={{ minWidth: '40px' }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export const NavTree: React.FC<NavigationProps & { expandable?: boolean }> = ({
  items,
  expandable = true,
  onItemClick,
  className = '',
  ...props
}) => {
  const [expanded, setExpanded] = React.useState<Set<number>>(new Set());

  const toggleExpanded = (idx: number) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx);
    } else {
      newExpanded.add(idx);
    }
    setExpanded(newExpanded);
  };

  return (
    <nav className={`space-y-1 ${className}`} {...props}>
      {items.map((item, idx) => (
        <div key={idx}>
          <div className="flex items-center gap-2">
            {item.submenu && expandable && (
              <button
                onClick={() => toggleExpanded(idx)}
                className="w-4 h-4 flex items-center justify-center"
              >
                {expanded.has(idx) ? '▼' : '▶'}
              </button>
            )}
            <button
              onClick={() => onItemClick?.(item)}
              className="flex-1 text-left px-3 py-2 rounded text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </button>
          </div>
          {item.submenu && expanded.has(idx) && (
            <div className="ml-4 border-l border-gray-200">
              {item.submenu.map((subitem, sidx) => (
                <button
                  key={sidx}
                  onClick={() => onItemClick?.(subitem)}
                  className="w-full text-left px-3 py-2 rounded text-gray-600 hover:bg-gray-100 text-sm"
                >
                  {subitem.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export const NavMegamenu: React.FC<
  NavigationProps & {
    columns?: number;
  }
> = ({
  items,
  columns = 3,
  onItemClick,
  className = '',
  ...props
}) => {
  const [openMenu, setOpenMenu] = React.useState<number | null>(null);

  return (
    <nav className={`relative ${className}`} {...props}>
      <div className="flex gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="relative group">
            <button
              onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
              className="px-4 py-3 font-medium text-gray-700 hover:text-gray-900"
            >
              {item.label}
            </button>
            {item.submenu && (
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-6 min-w-max">
                <div className={`grid grid-cols-${columns} gap-6`}>
                  {item.submenu.map((subitem, sidx) => (
                    <button
                      key={sidx}
                      onClick={() => onItemClick?.(subitem)}
                      className="text-left text-gray-700 hover:text-blue-600"
                    >
                      <div className="font-medium">{subitem.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
