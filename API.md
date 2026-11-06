# API Documentation - @lp-labs/ui-components

## Table of Contents

- [Components](#components)
- [Utilities](#utilities)
- [Theme](#theme)
- [Styling](#styling)

---

## Components

### Button

Interactive button component with multiple variants and sizes.

```jsx
import { Button } from '@lp-labs/ui-components/components';

<Button variant="primary" size="md">
  Click me
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `icon` | `ReactNode` | - | Icon to display |
| `disabled` | `boolean` | `false` | Disables the button |

#### Examples

```jsx
// Primary button with loading
<Button loading>Submit</Button>

// Danger button
<Button variant="danger">Delete</Button>

// Full width button
<Button fullWidth>Continue</Button>
```

---

### Card

Container component with optional elevation and border.

```jsx
import { Card } from '@lp-labs/ui-components/components';

<Card elevation="md" padding="lg">
  Card content
</Card>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `elevation` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Shadow elevation level |
| `padding` | `'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `border` | `boolean` | `false` | Show border |
| `interactive` | `boolean` | `false` | Hover effects enabled |

#### Examples

```jsx
<Card border>
  <h2>Title</h2>
  <p>Content goes here</p>
</Card>

<Card interactive padding="lg" elevation="lg">
  Clickable card with shadow
</Card>
```

---

### Input

Text input component with validation support.

```jsx
import { Input } from '@lp-labs/ui-components/components';

<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  error={hasError}
  errorMessage="Invalid email"
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `error` | `boolean` | `false` | Error state |
| `errorMessage` | `string` | - | Error message to display |
| `helpText` | `string` | - | Helper text |
| `fullWidth` | `boolean` | `false` | Full width input |
| `disabled` | `boolean` | `false` | Disables input |

#### Examples

```jsx
<Input
  label="Username"
  placeholder="Enter username"
  helpText="3-20 characters"
/>

<Input
  type="password"
  label="Password"
  error={passwordError}
  errorMessage="Password too short"
/>
```

---

### Modal

Dialog component for displaying content in a modal window.

```jsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@lp-labs/ui-components/components';

<Modal open={isOpen} onClose={handleClose} title="Confirm Action">
  <ModalBody>Are you sure?</ModalBody>
  <ModalFooter>
    <Button onClick={handleClose}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </ModalFooter>
</Modal>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controls modal visibility |
| `onClose` | `() => void` | - | Called when modal should close |
| `title` | `string` | - | Modal title |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Modal size |
| `closeButton` | `boolean` | `true` | Show close button |

#### Sub-components

- `ModalHeader` - Header section
- `ModalBody` - Body content
- `ModalFooter` - Footer section

---

### Badge

Label component for tags, status, and categories.

```jsx
import { Badge } from '@lp-labs/ui-components/components';

<Badge variant="success" dot>
  Online
</Badge>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | Badge style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `dot` | `boolean` | `false` | Show status dot |

#### Examples

```jsx
<Badge variant="success">Active</Badge>
<Badge variant="danger" dot>Error</Badge>
<Badge size="lg" variant="info">Badge</Badge>
```

---

### Alert

Notification component for messages.

```jsx
import { Alert } from '@lp-labs/ui-components/components';

<Alert variant="success" title="Success!" closeable>
  Operation completed successfully
</Alert>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'warning' \| 'danger' \| 'info'` | `'info'` | Alert type |
| `title` | `string` | - | Alert title |
| `onClose` | `() => void` | - | Close handler |
| `closeable` | `boolean` | `false` | Show close button |

---

### Dropdown

Dropdown menu component.

```jsx
import { Dropdown, DropdownItem, DropdownMenu } from '@lp-labs/ui-components/components';

<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownMenu>
    <DropdownItem onClick={handleAction}>Action 1</DropdownItem>
    <DropdownItem onClick={handleAction}>Action 2</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `ReactNode` | - | Trigger element |
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Open state change handler |

---

### Navbar

Navigation bar component.

```jsx
import { Navbar, NavbarBrand, NavbarNav, NavbarItem } from '@lp-labs/ui-components/components';

<Navbar brand="MyApp">
  <NavbarNav>
    <NavbarItem active><a href="#">Home</a></NavbarItem>
    <NavbarItem><a href="#">About</a></NavbarItem>
  </NavbarNav>
</Navbar>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `ReactNode` | - | Brand/logo element |
| `fluid` | `boolean` | `false` | Full width navbar |

---

## Utilities

### Class Names

```jsx
import { cn } from '@lp-labs/ui-components/utilities';

const className = cn('base-class', isActive && 'active-class', 'another-class');
```

### Spacing

```jsx
import { spacing } from '@lp-labs/ui-components/utilities';

<div className={spacing.padding.md}>
  Padded content
</div>
```

Available sizes: `none`, `xs`, `sm`, `medium`, `md`, `lg`, `xl`, `2xl`

### Colors

```jsx
import { colors } from '@lp-labs/ui-components/utilities';

<div className={colors.background.light}>
  Light background
</div>
```

### Typography

```jsx
import { typography } from '@lp-labs/ui-components/utilities';

<p className={cn(typography.size.lg, typography.weight.bold)}>
  Large bold text
</p>
```

### Other Utilities

- `radius` - Border radius utilities
- `shadows` - Shadow utilities
- `flex` - Flexbox utilities
- `responsive` - Responsive display utilities
- `display` - Display utilities
- `position` - Position utilities
- `size` - Size utilities
- `state` - State utilities (hover, focus, disabled)

---

## Theme

### ThemeProvider

Wrap your app with the theme provider:

```jsx
import { ThemeProvider } from '@lp-labs/ui-components/theme';

<ThemeProvider theme="light">
  <App />
</ThemeProvider>
```

#### Theme Options

- `'light'` - Light theme (default)
- `'dark'` - Dark theme
- `'auto'` - Follow system preference
- Custom theme object

### useTheme Hook

```jsx
import { useTheme } from '@lp-labs/ui-components/theme';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.colors.primary }}>
      Content
    </div>
  );
}
```

### Custom Theme

```jsx
const customTheme = {
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
    // ... more colors
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    // ... more spacing
  },
  // ... more configuration
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

---

## Styling

### CSS Classes

Import the stylesheet to use all utility classes:

```jsx
import '@lp-labs/ui-components/styles';
```

### CSS-in-JS

```jsx
import { createStyles, combineStyles } from '@lp-labs/ui-components/utilities';

const buttonStyles = createStyles({
  padding: '12px 16px',
  backgroundColor: '#007bff',
  color: 'white',
});
```

### CSS Variables

All theme values are available as CSS variables:

```css
:root {
  --color-primary: #007bff;
  --spacing-md: 1rem;
  --radius-md: 0.5rem;
  /* ... more variables ... */
}
```

Override them in your styles:

```css
:root {
  --color-primary: #ff0000;
}
```

---

## Accessibility Features

All components include:

- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader compatibility
- High contrast support
- Motion preferences respect

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

---

## Migration Guide

### From Bootstrap

```jsx
// Bootstrap
<div className="btn btn-primary">Click</div>

// @lp-labs/ui-components
<Button variant="primary">Click</Button>
```

### From Tailwind

The library complements Tailwind. Use components for complex UI and Tailwind utilities for customization:

```jsx
<Button className="w-full md:w-auto">
  Custom Button
</Button>
```

---

## Support

- GitHub Issues: [Report issues](https://github.com/lp-labs/flow/issues)
- Discussions: [Ask questions](https://github.com/lp-labs/flow/discussions)
- Email: [Contact us](mailto:libin@example.com)
