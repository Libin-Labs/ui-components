# Contributing to @lp-labs/ui-components

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Development Process

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure your code follows the project style
4. Write a clear commit message
5. Submit a Pull Request

## Setup

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm run test

# Format code
npm run format
```

## Component Guidelines

### Creating New Components

1. Create a new file in `src/components/` named `YourComponent.tsx`
2. Export it from `src/components/index.ts`
3. Add comprehensive TypeScript types
4. Include proper accessibility attributes
5. Use the theming system via CSS classes or utilities
6. Add unit tests

### Component Structure

```tsx
import React from 'react';
import { cn } from '../utilities/classNames';

export interface YourComponentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const YourComponent = React.forwardRef<HTMLElement, YourComponentProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('component-class', className)} {...props}>
        Content
      </div>
    );
  },
);

YourComponent.displayName = 'YourComponent';
```

## Styling Guidelines

- Use CSS utility classes from `src/utilities/classNames.ts`
- Leverage CSS variables for theming
- Ensure dark mode compatibility
- Use semantic HTML elements
- Follow mobile-first responsive design

## Testing

- Write tests for all new components
- Use the test helpers in `tests/helpers.mjs`
- Test accessibility features
- Run `npm run test` before submitting PR

## Code Style

We use Prettier for code formatting. Run:

```bash
npm run format
```

## Accessibility

- All components must be keyboard accessible
- Include proper ARIA labels
- Test with screen readers
- Follow WCAG 2.1 AA guidelines

## Documentation

- Update README.md for major features
- Add JSDoc comments for public APIs
- Include usage examples
- Document all props

## Pull Request Process

1. Update the CHANGELOG.md with your changes
2. Add tests for new functionality
3. Ensure all tests pass: `npm run test`
4. Verify type checking: `npm run typecheck`
5. Format code: `npm run format`
6. Write a clear PR description

## Issue Guidelines

- Check if the issue already exists
- Use clear, descriptive titles
- Include steps to reproduce for bugs
- Include screenshots for UI issues
- Specify your environment (OS, browser, versions)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Questions?

Feel free to open an issue with the tag `question` or contact the maintainer.

Thank you for contributing! 🎉
