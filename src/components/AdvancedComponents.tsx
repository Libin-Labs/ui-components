import React from 'react';

export interface AdvancedComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FormBuilder: React.FC<
  AdvancedComponentProps & {
    fields: Array<{
      id: string;
      type: 'text' | 'email' | 'password' | 'number' | 'date' | 'select' | 'checkbox' | 'radio';
      label: string;
      required?: boolean;
      options?: Array<{ label: string; value: string }>;
    }>;
    onSubmit?: (data: Record<string, any>) => void;
  }
> = ({
  fields,
  onSubmit,
  className = '',
  ...props
}) => {
  const [formData, setFormData] = React.useState<Record<string, any>>({});

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(formData);
      }}
      className={`space-y-4 ${className}`}
      {...props}
    >
      {fields.map((field) => (
        <div key={field.id}>
          <label className="block text-sm font-medium mb-1">
            {field.label}
            {field.required && <span className="text-red-600">*</span>}
          </label>
          {field.type === 'select' && (
            <select
              value={formData[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select...</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}
          {field.type === 'checkbox' && (
            <input
              type="checkbox"
              checked={formData[field.id] || false}
              onChange={(e) => handleChange(field.id, e.target.checked)}
              className="w-4 h-4"
            />
          )}
          {field.type !== 'select' && field.type !== 'checkbox' && (
            <input
              type={field.type}
              value={formData[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export const TableBuilder: React.FC<
  AdvancedComponentProps & {
    data: Array<Record<string, any>>;
    columns: Array<{ key: string; label: string }>;
    editable?: boolean;
  }
> = ({
  data,
  columns,
  editable = false,
  className = '',
  ...props
}) => {
  const [editingRow, setEditingRow] = React.useState<number | null>(null);
  const [editValues, setEditValues] = React.useState<Record<string, any>>({});

  return (
    <div className={`overflow-x-auto ${className}`} {...props}>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 text-left font-semibold border-b">
                {col.label}
              </th>
            ))}
            {editable && <th className="px-4 py-2 text-left font-semibold border-b">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 border-b">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2">
                  {editingRow === idx ? (
                    <input
                      type="text"
                      value={editValues[col.key] || ''}
                      onChange={(e) =>
                        setEditValues((prev) => ({
                          ...prev,
                          [col.key]: e.target.value,
                        }))
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
              {editable && (
                <td className="px-4 py-2 flex gap-2">
                  {editingRow === idx ? (
                    <>
                      <button className="px-2 py-1 bg-green-600 text-white rounded">Save</button>
                      <button
                        onClick={() => setEditingRow(null)}
                        className="px-2 py-1 bg-gray-600 text-white rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingRow(idx);
                          setEditValues(row);
                        }}
                        className="px-2 py-1 bg-blue-600 text-white rounded"
                      >
                        Edit
                      </button>
                      <button className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Dashboard: React.FC<
  AdvancedComponentProps & {
    title?: string;
    widgets: Array<{ id: string; title: string; content: React.ReactNode }>;
    columns?: number;
  }
> = ({
  title,
  widgets,
  columns = 3,
  className = '',
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {title && <h1 className="text-3xl font-bold mb-8">{title}</h1>}
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {widgets.map((widget) => (
          <div key={widget.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">{widget.title}</h2>
            {widget.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Wizard: React.FC<
  AdvancedComponentProps & {
    steps: Array<{ title: string; content: React.ReactNode }>;
    onComplete?: () => void;
  }
> = ({
  steps,
  onComplete,
  className = '',
  ...props
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <div className={`max-w-2xl mx-auto ${className}`} {...props}>
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`flex-1 text-center py-2 border-b-4 ${
                idx === currentStep ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-600'
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">{steps[currentStep].content}</div>
      </div>
      <div className="flex gap-4 justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        {currentStep === steps.length - 1 ? (
          <button
            onClick={onComplete}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Complete
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export const KanbanBoard: React.FC<
  AdvancedComponentProps & {
    columns: Array<{
      id: string;
      title: string;
      cards: Array<{ id: string; title: string; description?: string }>;
    }>;
  }
> = ({
  columns,
  className = '',
  ...props
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto ${className}`} {...props}>
      {columns.map((col) => (
        <div key={col.id} className="bg-gray-100 rounded-lg p-4 min-w-sm">
          <h3 className="font-semibold mb-4">{col.title}</h3>
          <div className="space-y-2">
            {col.cards.map((card) => (
              <div key={card.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <p className="font-medium">{card.title}</p>
                {card.description && <p className="text-sm text-gray-600 mt-1">{card.description}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Timeline: React.FC<
  AdvancedComponentProps & {
    items: Array<{
      id: string;
      title: string;
      description?: string;
      timestamp?: string;
      icon?: React.ReactNode;
    }>;
  }
> = ({
  items,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-6 ${className}`} {...props}>
      {items.map((item, idx) => (
        <div key={item.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
              {item.icon || '●'}
            </div>
            {idx < items.length - 1 && <div className="w-0.5 h-20 bg-gray-300 mt-2"></div>}
          </div>
          <div className="pb-6">
            <h4 className="font-semibold">{item.title}</h4>
            {item.description && <p className="text-gray-600 text-sm mt-1">{item.description}</p>}
            {item.timestamp && <p className="text-gray-500 text-xs mt-2">{item.timestamp}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export const OrgChart: React.FC<
  AdvancedComponentProps & {
    root: { name: string; children?: any[] };
  }
> = ({
  root,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`} {...props}>
      <div className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">{root.name}</div>
      {root.children && root.children.length > 0 && (
        <>
          <div className="w-0.5 h-6 bg-gray-300"></div>
          <div className="flex gap-8">
            {root.children.map((child, idx) => (
              <OrgChart key={idx} root={child} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
