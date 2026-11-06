import React from 'react';
import { cn } from '../utilities/classNames';

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showValue?: boolean;
  step?: number;
  marks?: boolean;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      label,
      showValue = false,
      step = 1,
      marks = false,
      min = 0,
      max = 100,
      value = 50,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <div className="flex items-center gap-4">
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            className={cn(
              'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            )}
            {...props}
          />
          {showValue && (
            <span className="text-sm font-medium text-gray-700 min-w-max">
              {value}
            </span>
          )}
        </div>
        {marks && (
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    );
  },
);

Slider.displayName = 'Slider';
