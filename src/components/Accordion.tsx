import React from 'react';
import { cn } from '../utilities/classNames';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
  }>;
  allowMultiple?: boolean;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      allowMultiple = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
      const newOpen = new Set(openItems);
      if (newOpen.has(id)) {
        newOpen.delete(id);
      } else {
        if (!allowMultiple) {
          newOpen.clear();
        }
        newOpen.add(id);
      }
      setOpenItems(newOpen);
    };

    return (
      <div ref={ref} className={cn('border border-gray-200 rounded-lg', className)} {...props}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'border-b border-gray-200',
              index === items.length - 1 && 'border-b-0',
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 py-4 text-left font-medium hover:bg-gray-50 flex justify-between items-center transition-colors"
              aria-expanded={openItems.has(item.id)}
            >
              {item.title}
              <svg
                className={cn(
                  'w-5 h-5 transition-transform',
                  openItems.has(item.id) && 'transform rotate-180',
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openItems.has(item.id) && (
              <div className="px-4 py-4 text-gray-700 border-t border-gray-200">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  },
);

Accordion.displayName = 'Accordion';
