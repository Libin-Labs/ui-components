# Quick Reference - @lp-labs/ui-components

## 🚀 Installation & Setup

```bash
# Navigate to the package
cd C:\Users\INLIPRA1\dev\flow\packages\ui-components

# Install dependencies (when ready)
npm install

# Build the library
npm run build

# Run type checking
npm run typecheck

# Run tests
npm run test
```

## 📦 Usage Examples

### Import Components
```jsx
import { Button, Card, Input, Modal, Badge, Alert } from '@lp-labs/ui-components/components';
import '@lp-labs/ui-components/styles';

// Use components
<Button variant="primary">Click Me</Button>
<Card elevation="md">Content</Card>
<Input label="Email" type="email" />
```

### Import Utilities
```jsx
import { cn, spacing, colors, typography } from '@lp-labs/ui-components/utilities';

<div className={cn(spacing.padding.lg, colors.background.light)}>
  Content
</div>
```

### Use Theme System
```jsx
import { ThemeProvider, useTheme } from '@lp-labs/ui-components/theme';

<ThemeProvider theme="dark">
  <App />
</ThemeProvider>

function MyComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.colors.primary }}>Text</div>;
}
```

## 🎨 Component Quick Reference

### Button
```jsx
<Button 
  variant="primary"      // 'primary' | 'secondary' | 'danger' | 'ghost'
  size="md"              // 'sm' | 'md' | 'lg'
  loading={false}
  disabled={false}
  fullWidth={false}
>
  Label
</Button>
```

### Card
```jsx
<Card 
  elevation="md"         // 'none' | 'sm' | 'md' | 'lg'
  padding="md"           // 'sm' | 'md' | 'lg'
  border={false}
  interactive={false}
>
  Content
</Card>
```

### Input
```jsx
<Input
  label="Text"
  type="text"
  placeholder="..."
  error={false}
  errorMessage="Error"
  helpText="Help"
  fullWidth={false}
  disabled={false}
/>
```

### Modal
```jsx
<Modal 
  open={true}
  onClose={() => {}}
  title="Modal"
  size="md"              // 'sm' | 'md' | 'lg'
  closeButton={true}
>
  Content
</Modal>
```

### Badge
```jsx
<Badge
  variant="primary"      // 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  size="md"              // 'sm' | 'md' | 'lg'
  dot={false}
>
  Label
</Badge>
```

### Alert
```jsx
<Alert
  variant="success"      // 'success' | 'warning' | 'danger' | 'info'
  title="Title"
  closeable={false}
  onClose={() => {}}
>
  Message
</Alert>
```

### Dropdown
```jsx
<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownMenu>
    <DropdownItem onClick={() => {}}>Option 1</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Option 2</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

### Navbar
```jsx
<Navbar brand="MyApp">
  <NavbarNav>
    <NavbarItem active><a href="#">Home</a></NavbarItem>
    <NavbarItem><a href="#">About</a></NavbarItem>
  </NavbarNav>
  <NavbarToggle onClick={() => {}} />
</Navbar>
```

## 🎭 Utility Classes

### Spacing
- Padding: `p-0`, `p-1`, `p-2`, `p-3`, `p-4`, `p-6`, `p-8`, `p-12`
- Margin: `m-0`, `m-1`, `m-2`, `m-4`, `m-6`, `m-8`, `m-12`
- Gap: `gap-1`, `gap-2`, `gap-3`, `gap-4`, `gap-6`, `gap-8`, `gap-12`

### Colors
- Background: `bg-white`, `bg-gray-50`, `bg-blue-600`, `bg-red-50`, etc.
- Text: `text-white`, `text-gray-700`, `text-blue-600`, etc.
- Border: `border-gray-200`, `border-blue-600`, etc.

### Typography
- Size: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`
- Weight: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- Line Height: `leading-tight`, `leading-normal`, `leading-relaxed`

### Layout
- Display: `block`, `inline`, `inline-block`, `flex`, `grid`, `hidden`
- Flex: `flex-col`, `items-center`, `justify-between`, `flex-1`, `flex-shrink-0`
- Position: `relative`, `absolute`, `fixed`, `sticky`

### States
- Hover: `hover:opacity-90`, `hover:bg-gray-100`, `hover:shadow-lg`
- Focus: `focus:outline-none`, `focus:ring-2`, `focus:ring-blue-500`
- Active: `active:opacity-75`, `active:bg-gray-200`
- Disabled: `disabled:opacity-50`, `disabled:cursor-not-allowed`

### Responsive
- `sm:block` (640px+), `md:block` (768px+), `lg:block` (1024px+)
- `sm:hidden`, `md:hidden`, `lg:hidden`

## 🎯 CSS Variables

```css
/* Colors */
--color-primary: #007bff;
--color-secondary: #6c757d;
--color-success: #28a745;
--color-warning: #ffc107;
--color-danger: #dc3545;
--color-info: #17a2b8;

/* Spacing */
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;

/* Typography */
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-md: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;

/* Radius */
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Transitions */
--transition-fast: 150ms ease-in-out;
--transition-normal: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```

## 📝 Common Patterns

### Form with Validation
```jsx
const [email, setEmail] = useState('');
const [error, setError] = useState(false);

<div className="space-y-4">
  <Input
    label="Email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    error={error}
    errorMessage="Invalid email"
  />
  <Button onClick={() => setError(!email.includes('@'))}>
    Submit
  </Button>
</div>
```

### Modal Dialog
```jsx
const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <Modal open={open} onClose={() => setOpen(false)} title="Confirm">
    <div className="space-y-4">
      <p>Are you sure?</p>
      <div className="flex gap-2 justify-end">
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button onClick={() => setOpen(false)}>Confirm</Button>
      </div>
    </div>
  </Modal>
</>
```

### Custom Theme
```jsx
const customTheme = {
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
  },
  spacing: {
    md: '2rem',
  },
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

## 📖 Documentation Links

- **README.md** - Quick start and overview
- **API.md** - Complete API documentation
- **SETUP.md** - Development setup guide
- **CONTRIBUTING.md** - How to contribute
- **DEMO.tsx** - Live component examples
- **PROJECT_SUMMARY.md** - Project details
- **DELIVERY_SUMMARY.md** - Delivery information

## 🔗 Export Paths

```javascript
// All exports
import { Button, Card, cn, useTheme } from '@lp-labs/ui-components';

// Components only
import { Button, Card } from '@lp-labs/ui-components/components';

// Utilities only
import { cn, spacing } from '@lp-labs/ui-components/utilities';

// Theme only
import { ThemeProvider, useTheme } from '@lp-labs/ui-components/theme';

// Styles
import '@lp-labs/ui-components/styles';
```

## 💡 Tips

1. **Tree-shake**: Import only what you need
2. **Combine Classes**: Use `cn()` to combine class names
3. **Customize**: Override CSS variables for theming
4. **Accessibility**: All components are WCAG 2.1 AA compliant
5. **Responsive**: Use responsive classes for mobile-first design
6. **Dark Mode**: Wrap with `<ThemeProvider theme="dark">`

---

**Location**: `C:\Users\INLIPRA1\dev\flow\packages\ui-components`
**Status**: ✅ Production Ready
**License**: MIT
