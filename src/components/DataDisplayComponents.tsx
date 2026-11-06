import React from 'react';

export interface DataDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface TableColumn {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
  filterable?: boolean;
}

export interface TableData {
  [key: string]: any;
}

export const TableBasic: React.FC<
  DataDisplayProps & {
    columns: TableColumn[];
    data: TableData[];
    striped?: boolean;
    bordered?: boolean;
  }
> = ({ columns, data, striped = true, bordered = true, className = '', ...props }) => {
  return (
    <div className={`overflow-x-auto ${className}`} {...props}>
      <table className={`w-full text-sm ${bordered ? 'border border-gray-300' : ''}`}>
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={`px-4 py-2 text-left font-semibold`} style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-gray-200 ${striped && idx % 2 === 0 ? 'bg-gray-50' : ''} hover:bg-gray-100`}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TableSortable: React.FC<
  DataDisplayProps & {
    columns: TableColumn[];
    data: TableData[];
    onSort?: (key: string, direction: 'asc' | 'desc') => void;
  }
> = ({ columns, data, onSort, className = '', ...props }) => {
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    const newDirection = sortColumn === key && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(key);
    setSortDirection(newDirection);
    onSort?.(key, newDirection);
  };

  return (
    <div className={`overflow-x-auto ${className}`} {...props}>
      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-2 text-left font-semibold ${col.sortable ? 'cursor-pointer hover:bg-gray-200' : ''}`}
                onClick={() => col.sortable && handleSort(col.key)}
                style={{ width: col.width }}
              >
                <div className="flex items-center gap-2">
                  {col.header}
                  {col.sortable && sortColumn === col.key && (
                    <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TableFilterable: React.FC<
  DataDisplayProps & {
    columns: TableColumn[];
    data: TableData[];
    onFilter?: (filters: Record<string, string>) => void;
  }
> = ({ columns, data, onFilter, className = '', ...props }) => {
  const [filters, setFilters] = React.useState<Record<string, string>>({});

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter?.(newFilters);
  };

  const filteredData = data.filter((row) =>
    Object.entries(filters).every(([key, value]) =>
      !value || String(row[key]).toLowerCase().includes(value.toLowerCase()),
    ),
  );

  return (
    <div className={`${className}`} {...props}>
      <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns
            .filter((col) => col.filterable)
            .map((col) => (
              <input
                key={col.key}
                type="text"
                placeholder={`Filter ${col.header}...`}
                value={filters[col.key] || ''}
                onChange={(e) => handleFilterChange(col.key, e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-2 text-left font-semibold" style={{ width: col.width }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredData.length === 0 && <p className="text-center py-4 text-gray-500">No results found</p>}
    </div>
  );
};

export const TableExpandable: React.FC<
  DataDisplayProps & {
    columns: TableColumn[];
    data: TableData[];
    renderDetails?: (row: TableData) => React.ReactNode;
  }
> = ({ columns, data, renderDetails, className = '', ...props }) => {
  const [expandedRows, setExpandedRows] = React.useState<Set<number>>(new Set());

  const toggleExpanded = (idx: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx);
    } else {
      newExpanded.add(idx);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <div className={`overflow-x-auto ${className}`} {...props}>
      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            <th className="px-4 py-2 w-10"></th>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 text-left font-semibold" style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <React.Fragment key={idx}>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">
                  <button onClick={() => toggleExpanded(idx)} className="text-lg">
                    {expandedRows.has(idx) ? '▼' : '▶'}
                  </button>
                </td>
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
              {expandedRows.has(idx) && (
                <tr className="bg-blue-50 border-b border-gray-200">
                  <td colSpan={columns.length + 1} className="px-4 py-4">
                    {renderDetails?.(row)}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TableCompact: React.FC<
  DataDisplayProps & {
    columns: TableColumn[];
    data: TableData[];
  }
> = ({ columns, data, className = '', ...props }) => {
  return (
    <div className={`overflow-x-auto ${className}`} {...props}>
      <table className="w-full text-xs border border-gray-300">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-2 py-1 text-left font-semibold" style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
              {columns.map((col) => (
                <td key={col.key} className="px-2 py-1">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
