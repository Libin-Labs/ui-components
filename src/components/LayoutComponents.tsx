import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  autoFit?: boolean;
  minWidth?: string;
}

const gapClass = {
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

export const GridAuto: React.FC<GridProps> = ({
  gap = 'md',
  autoFit = true,
  minWidth = '250px',
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`grid ${gapClass[gap]} ${className}`}
      style={{
        gridTemplateColumns: autoFit ? `repeat(auto-fit, minmax(${minWidth}, 1fr))` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const GridResponsive: React.FC<
  GridProps & {
    cols?: { sm?: number; md?: number; lg?: number; xl?: number };
  }
> = ({
  gap = 'md',
  cols = { sm: 1, md: 2, lg: 3, xl: 4 },
  className = '',
  children,
  ...props
}) => {
  const colClass = `grid-cols-${cols.sm || 1} sm:grid-cols-${cols.md || 2} lg:grid-cols-${cols.lg || 3} xl:grid-cols-${cols.xl || 4}`;

  return (
    <div className={`grid ${gapClass[gap]} ${colClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const GridMasonry: React.FC<GridProps> = ({ gap = 'md', className = '', children, ...props }) => {
  return (
    <div
      className={`grid ${gapClass[gap]} ${className}`}
      style={{ columnCount: 'auto', columnFill: 'balance' }}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <div style={{ breakInside: 'avoid' }}>{child}</div>
      ))}
    </div>
  );
};

export const GridFixedCol: React.FC<
  GridProps & {
    columns: number;
  }
> = ({ gap = 'md', columns = 3, className = '', children, ...props }) => {
  return (
    <div className={`grid grid-cols-${columns} ${gapClass[gap]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const GridDynamic: React.FC<
  GridProps & {
    minColWidth?: string;
  }
> = ({
  gap = 'md',
  minColWidth = '200px',
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`grid ${gapClass[gap]} ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${minColWidth}, 1fr))`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const GridNested: React.FC<GridProps> = ({
  gap = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`grid ${gapClass[gap]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const GridAligned: React.FC<
  GridProps & {
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between';
  }
> = ({
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  className = '',
  children,
  ...props
}) => {
  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  }[align];

  const justifyClass = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  }[justify];

  return (
    <div className={`grid ${gapClass[gap]} ${alignClass} ${justifyClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Container: React.FC<GridProps & { maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' }> = ({
  maxWidth = 'lg',
  className = '',
  children,
  ...props
}) => {
  const maxWidthClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }[maxWidth];

  return (
    <div className={`mx-auto px-4 ${maxWidthClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Flex: React.FC<
  GridProps & {
    direction?: 'row' | 'col';
    wrap?: boolean;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  }
> = ({
  direction = 'row',
  wrap = false,
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  className = '',
  children,
  ...props
}) => {
  const directionClass = direction === 'col' ? 'flex-col' : 'flex-row';
  const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap';
  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  }[align];

  const justifyClass = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }[justify];

  return (
    <div className={`flex ${directionClass} ${wrapClass} ${gapClass[gap]} ${alignClass} ${justifyClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Stack: React.FC<GridProps & { direction?: 'vertical' | 'horizontal' }> = ({
  direction = 'vertical',
  gap = 'md',
  className = '',
  children,
  ...props
}) => {
  const directionClass = direction === 'vertical' ? 'flex-col' : 'flex-row';

  return (
    <div className={`flex ${directionClass} ${gapClass[gap]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const AspectRatio: React.FC<
  GridProps & {
    ratio?: 'square' | '16/9' | '4/3' | '21/9';
  }
> = ({
  ratio = 'square',
  className = '',
  children,
  ...props
}) => {
  const ratioClass = {
    square: 'aspect-square',
    '16/9': 'aspect-video',
    '4/3': 'aspect-video', // fallback
    '21/9': 'aspect-auto',
  }[ratio];

  return (
    <div className={`${ratioClass} overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};
