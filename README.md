# @lp-labs/ui-components

A comprehensive hybrid UI component library with built-in components, utilities, and theming support. Designed for React applications with a focus on accessibility, customization, and developer experience.

## Features

- 🎨 **Pre-built Components** - Ready-to-use components (Button, Card, Input, Modal, Navbar, Badge, Alert, Dropdown, etc.)
- ⚙️ **Utility Classes** - Flexible utility-first approach for fine-grained control
- 🎭 **Theming System** - Powerful customization with CSS variables and theme provider
- ♿ **Accessible** - WCAG 2.1 AA compliant components
- 📦 **Tree-shakeable** - Only pay for what you use
- 🔄 **Framework Agnostic Core** - Utilities work anywhere, React components for React
- 📱 **Responsive** - Mobile-first design approach
- ✨ **TypeScript** - Full type safety and intellisense

## Installation

```bash
npm install @lp-labs/ui-components
```

## Quick Start

### Using Components

```jsx
import { Button, Card, Input } from '@lp-labs/ui-components/components';

export function App() {
  return (
    <Card>
      <h2>Welcome</h2>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Using Utilities

```jsx
import { cn, spacing, colors } from '@lp-labs/ui-components/utilities';

export function MyComponent() {
  return (
    <div className={cn(
      spacing.padding.medium,
      colors.background.light,
      'rounded-lg'
    )}>
      Content
    </div>
  );
}
```

### Using Theme

```jsx
import { ThemeProvider, useTheme } from '@lp-labs/ui-components/theme';

export function App() {
  return (
    <ThemeProvider theme="dark">
      <YourApp />
    </ThemeProvider>
  );
}

function MyComponent() {
  const { colors, spacing } = useTheme();
  return <div style={{ color: colors.primary }}>{/* ... */}</div>;
}
```

## Available Components

### Core Components

- **Button** - Interactive button with multiple variants and sizes
- **Card** - Container component with elevation support
- **Input** - Text input with validation states
- **Modal** - Dialog component with backdrop
- **Navbar** - Navigation bar with responsive menu
- **Badge** - Label component for status and categories
- **Alert** - Notification/alert component
- **Dropdown** - Dropdown menu component

### Additional Components

- **Tabs** - Tab navigation
- **Progress** - Progress indicator
- **Spinner** - Loading spinner
- **Tooltip** - Hover tooltips
- **Checkbox** - Checkbox input
- **Radio** - Radio button input
- **Select** - Dropdown select
- **Textarea** - Multi-line input

## Styling Approaches

### CSS Modules (Recommended)

```jsx
import styles from '@lp-labs/ui-components/styles';
import { Button } from '@lp-labs/ui-components/components';
```

### CSS Classes

```jsx
import '@lp-labs/ui-components/styles';
import { Button } from '@lp-labs/ui-components/components';
```

### Utilities Only

```jsx
import { cn, spacing, colors, typography } from '@lp-labs/ui-components/utilities';
```

## Theming

### Built-in Themes

- **light** - Light color scheme
- **dark** - Dark color scheme
- **auto** - Follows system preference

### Custom Theme

```jsx
import { ThemeProvider } from '@lp-labs/ui-components/theme';

const customTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    // ...
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
};

export function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Configuration

### CSS Variables

The library exposes all theme values as CSS variables:

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  /* ... more variables ... */
}
```

### Customization

Override CSS variables in your application:

```css
:root {
  --color-primary: #ff0000;
  --spacing-base: 8px;
}
```

## API Documentation

### Button

```jsx
<Button
  variant="primary" // 'primary' | 'secondary' | 'danger' | 'ghost'
  size="md" // 'sm' | 'md' | 'lg'
  disabled={false}
  onClick={handleClick}
>
  Click me
</Button>
```

### Card

```jsx
<Card
  elevation="md" // 'none' | 'sm' | 'md' | 'lg'
  padding="md" // 'sm' | 'md' | 'lg'
  border={true}
>
  Card content
</Card>
```

### Input

```jsx
<Input
  type="text"
  placeholder="Enter text"
  value={value}
  onChange={handleChange}
  error={false}
  disabled={false}
/>
```

### Modal

```jsx
<Modal open={isOpen} onClose={handleClose}>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>
    <Button>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </Modal.Footer>
</Modal>
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
