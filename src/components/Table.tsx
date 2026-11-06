import React, { useMemo } from 'react';
import { cn } from '../utilities/classNames';

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  striped?: boolean;
  hover?: boolean;
  bordered?: boolean;
  compact?: boolean;
  sortable?: boolean;
  sortKey?: string;
  sortOrder?: 'asc' | 'desc';
  onSort?: (key: string, order: 'asc' | 'desc') => void;
  selectable?: boolean;
  selectedRows?: (keyof T)[];
  onRowSelect?: (row: T) => void;
  onSelectAll?: (selected: boolean) => void;
  className?: string;
  rowClassName?: (row: T, index: number) => string;
}

export const Table = React.forwardRef(
  <T extends Record<string, any>>(
    {
      data,
      columns,
      striped = false,
      hover = true,
      bordered = false,
      compact = false,
      sortable = false,
      sortKey,
      sortOrder = 'asc',
      onSort,
      selectable = false,
      selectedRows = [],
      onRowSelect,
      onSelectAll,
      className,
      rowClassName,
    }: TableProps<T>,
    ref: React.Ref<HTMLTableElement>
  ) => {
    const [internalSortKey, setInternalSortKey] = React.useState(sortKey);
    const [internalSortOrder, setInternalSortOrder] = React.useState<'asc' | 'desc'>(sortOrder);

    const handleSort = (key: string) => {
      if (!sortable) return;
      const newOrder = internalSortKey === key && internalSortOrder === 'asc' ? 'desc' : 'asc';
      setInternalSortKey(key);
      setInternalSortOrder(newOrder);
      onSort?.(key, newOrder);
    };

    const sortedData = useMemo(() => {
      if (!internalSortKey) return data;
      const sorted = [...data].sort((a, b) => {
        const aVal = a[internalSortKey];
        const bVal = b[internalSortKey];
        if (aVal < bVal) return internalSortOrder === 'asc' ? -1 : 1;
        if (aVal > bVal) return internalSortOrder === 'asc' ? 1 : -1;
        return 0;
      });
      return sorted;
    }, [data, internalSortKey, internalSortOrder]);

    const allSelected = data.length > 0 && selectedRows.length === data.length;

    return (
      <div className="table-wrapper overflow-x-auto">
        <table
          ref={ref}
          className={cn(
            'w-full border-collapse text-sm',
            {
              'border border-gray-300': bordered,
              'striped-table': striped,
            },
            className
          )}
        >
          <thead>
            <tr className="bg-gray-50 border-b border-gray-300">
              {selectable && (
                <th className="p-3 text-left w-12">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => onSelectAll?.(e.target.checked)}
                    className="w-4 h-4 cursor-pointer"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={cn(
                    'p-3 text-left font-semibold text-gray-700',
                    { 'cursor-pointer hover:bg-gray-100': sortable && col.sortable },
                    col.width && { width: col.width }
                  )}
                  onClick={() => col.sortable && handleSort(String(col.key))}
                >
                  <div className="flex items-center gap-2">
                    {col.header}
                    {sortable && col.sortable && internalSortKey === String(col.key) && (
                      <span className="text-xs">
                        {internalSortOrder === 'asc' ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  'border-b border-gray-200 transition-colors',
                  {
                    'hover:bg-gray-50': hover,
                    'bg-gray-50': striped && rowIndex % 2 === 1,
                  },
                  rowClassName?.(row, rowIndex)
                )}
              >
                {selectable && (
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row)}
                      onChange={() => onRowSelect?.(row)}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className={cn('p-3 text-gray-700', {
                      'text-xs py-2': compact,
                    })}
                    style={col.width ? { width: col.width } : undefined}
                  >
                    {col.render
                      ? col.render(row[col.key], row, rowIndex)
                      : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="text-center py-8 text-gray-500">No data available</div>
        )}
      </div>
    );
  }
);

Table.displayName = 'Table';
