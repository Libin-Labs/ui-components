# @lp-labs/ui-components - Setup & Development Guide

## Project Structure

```
ui-components/
├── src/
│   ├── components/          # React components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Navbar.tsx
│   │   └── index.ts
│   ├── utilities/           # Utility functions & classes
│   │   ├── classNames.ts
│   │   ├── styles.ts
│   │   └── index.ts
│   ├── theme/               # Theming system
│   │   ├── ThemeProvider.tsx
│   │   └── index.ts
│   ├── styles/              # Global styles
│   │   └── main.css
│   └── index.ts             # Main entry point
├── scripts/
│   ├── build.mjs            # Build script
│   └── check-types.mjs      # Type checking
├── tests/
│   ├── helpers.mjs          # Test utilities
│   └── utilities.test.mjs   # Component tests
├── package.json             # Package configuration
├── tsconfig.json            # TypeScript config
├── .prettierrc               # Prettier config
├── README.md                # Main documentation
├── API.md                   # API documentation
├── CHANGELOG.md             # Version history
├── CONTRIBUTING.md          # Contribution guidelines
├── DEMO.tsx                 # Demo application
└── LICENSE                  # MIT License
```

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm run test

# Format code
npm run format

# Type checking
npm run typecheck
```

### Development Workflow

1. **Create a new component**
   ```bash
   # Add component to src/components/YourComponent.tsx
   # Export from src/components/index.ts
   # Add tests to tests/YourComponent.test.mjs
   ```

2. **Build for development**
   ```bash
   npm run build:watch
   ```

3. **Run tests**
   ```bash
   npm run test:watch
   ```

4. **Format code**
   ```bash
   npm run format
   ```

5. **Type check**
   ```bash
   npm run typecheck
   ```

## Component Architecture

### Component Template

```tsx
import React from 'react';
import { cn } from '../utilities/classNames';

export interface YourComponentProps extends React.HTMLAttributes<HTMLElement> {
  // Your props here
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const YourComponent = React.forwardRef<HTMLElement, YourComponentProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-styles',
          // variant and size classes
          className,
        )}
        {...props}
      >
        Component content
      </div>
    );
  },
);

YourComponent.displayName = 'YourComponent';
```

## Styling System

### CSS Utility Classes

The library provides a comprehensive set of utility classes in `main.css`:

- **Spacing**: `p-*`, `m-*`, `gap-*` (padding, margin, gap)
- **Colors**: `bg-*`, `text-*`, `border-*`
- **Typography**: `text-*`, `font-*`, `leading-*`
- **Layout**: `flex`, `grid`, `block`, `hidden`
- **States**: `hover:*`, `active:*`, `focus:*`, `disabled:*`
- **Responsive**: `sm:*`, `md:*`, `lg:*`

### CSS Variables

All design tokens are exposed as CSS variables in `:root`:

```css
--color-primary: #007bff;
--spacing-md: 1rem;
--radius-md: 0.5rem;
/* ... */
```

Override in your application:

```css
:root {
  --color-primary: #ff0000;
}
```

## Theme System

### Default Theme

The library includes a comprehensive default theme:

```typescript
{
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#17a2b8',
    // ... more colors
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  // ... typography, radius, shadows, transitions
}
```

### Dark Mode

Dark mode is supported via the `data-theme` attribute:

```jsx
<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
```

CSS automatically adapts via:

```css
[data-theme="dark"] {
  --color-background: #1f2937;
  --color-text: #f3f4f6;
  /* ... */
}
```

## Build Output

The library builds to multiple formats:

```
dist/
├── esm/
│   ├── components/
│   ├── utilities/
│   ├── theme/
│   ├── styles/
│   └── index.js
├── cjs/
│   └── (same structure)
└── styles/
    └── main.css
```

### Export Paths

```javascript
// Default export
import { Button } from '@lp-labs/ui-components';
import '@lp-labs/ui-components/styles';

// Component-only export
import { Button } from '@lp-labs/ui-components/components';

// Utilities export
import { cn, spacing } from '@lp-labs/ui-components/utilities';

// Theme export
import { ThemeProvider, useTheme } from '@lp-labs/ui-components/theme';
```

## Testing

### Test Structure

Tests are located in `tests/` directory with `.test.mjs` suffix:

```javascript
import { test, assertEqual } from './helpers.mjs';

test('Component behavior', () => {
  assertEqual(actual, expected, 'message');
});
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## Accessibility

All components follow WCAG 2.1 AA standards:

- ✅ Keyboard navigation
- ✅ ARIA labels and roles
- ✅ Focus management
- ✅ Screen reader support
- ✅ Color contrast (4.5:1 minimum)
- ✅ Motion preferences respected

## Performance

### Bundle Size

The library is optimized for minimal bundle size:

- Tree-shakeable exports
- CSS-in-JS optional
- No external dependencies
- Optional React peer dependency

### Optimization Tips

```javascript
// ✅ Good - Tree-shakeable
import { Button, Card } from '@lp-labs/ui-components/components';

// ✅ Good - Import only needed utilities
import { cn, spacing } from '@lp-labs/ui-components/utilities';

// ✅ Good - Use CSS classes instead of CSS-in-JS when possible
<div className="p-4 bg-white rounded-md">
  Content
</div>
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## Publishing

### Version

Update version in `package.json`:

```json
{
  "version": "1.1.0"
}
```

### Publish to NPM

```bash
# Login to npm
npm login

# Build
npm run build

# Publish
npm publish
```

## Troubleshooting

### Build Issues

```bash
# Clean build
rm -rf dist/
npm run build

# Check types
npm run typecheck
```

### TypeScript Errors

```bash
# Regenerate type definitions
npm run build

# Check for type errors
npm run typecheck
```

### Testing Issues

```bash
# Clear node cache
npm run build

# Run tests
npm run test
```

## Resources

- [README.md](./README.md) - Overview and quick start
- [API.md](./API.md) - Complete API documentation
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [CHANGELOG.md](./CHANGELOG.md) - Version history
- [DEMO.tsx](./DEMO.tsx) - Live component examples

## Support

- **Issues**: [GitHub Issues](https://github.com/lp-labs/flow/issues)
- **Email**: libin@example.com
- **Twitter**: [@libinprasanth](https://twitter.com/libinprasanth)

## License

MIT © 2024 Libin Prasanth
