import React from 'react';
import { cn } from '../utilities/classNames';

export interface StepProps {
  label: string;
  description?: string;
  icon?: React.ReactNode;
  status?: 'pending' | 'active' | 'completed' | 'error';
  onClick?: () => void;
  disabled?: boolean;
}

export interface StepperProps {
  steps: StepProps[];
  activeStep: number;
  onStepClick?: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'dots' | 'numbers';
  className?: string;
  editable?: boolean;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      activeStep,
      onStepClick,
      orientation = 'horizontal',
      variant = 'default',
      className,
      editable = false,
    },
    ref
  ) => {
    const getStepStatus = (index: number): StepProps['status'] => {
      if (index < activeStep) return 'completed';
      if (index === activeStep) return 'active';
      return 'pending';
    };

    const statusColors = {
      pending: 'bg-gray-200 text-gray-600',
      active: 'bg-blue-500 text-white',
      completed: 'bg-green-500 text-white',
      error: 'bg-red-500 text-white',
    };

    const renderStepIndicator = (step: StepProps, index: number) => {
      const status = getStepStatus(index);

      if (variant === 'dots') {
        return (
          <div
            key={index}
            className={cn(
              'w-3 h-3 rounded-full',
              {
                'bg-gray-300': status === 'pending',
                'bg-blue-500': status === 'active',
                'bg-green-500': status === 'completed',
                'bg-red-500': status === 'error',
              }
            )}
          />
        );
      }

      if (variant === 'numbers') {
        return (
          <div
            key={index}
            className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm',
              statusColors[status]
            )}
          >
            {status === 'completed' ? '✓' : index + 1}
          </div>
        );
      }

      return (
        <div key={index} className="flex flex-col items-center gap-2">
          <div
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors',
              statusColors[status],
              {
                'cursor-pointer hover:opacity-80': editable && !step.disabled,
                'cursor-not-allowed opacity-50': step.disabled,
              }
            )}
            onClick={() => editable && !step.disabled && onStepClick?.(index)}
          >
            {step.icon || (status === 'completed' ? '✓' : index + 1)}
          </div>
          <div className="text-center">
            <p className="font-medium text-sm text-gray-900">{step.label}</p>
            {step.description && (
              <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
            )}
          </div>
        </div>
      );
    };

    const containerClass = cn(
      {
        'flex items-center gap-4': orientation === 'horizontal',
        'flex flex-col gap-4': orientation === 'vertical',
      },
      className
    );

    return (
      <div ref={ref} className={containerClass}>
        {orientation === 'horizontal' && variant === 'default' ? (
          steps.map((step, index) => (
            <React.Fragment key={index}>
              {renderStepIndicator(step, index)}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'h-1 flex-1 rounded-full',
                    {
                      'bg-green-500': index < activeStep,
                      'bg-gray-300': index >= activeStep,
                    }
                  )}
                />
              )}
            </React.Fragment>
          ))
        ) : (
          steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start w-full">
              {renderStepIndicator(step, index)}
              {orientation === 'vertical' && index < steps.length - 1 && (
                <div className="h-16 w-0.5 bg-gray-300 ml-5" />
              )}
            </div>
          ))
        )}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';
