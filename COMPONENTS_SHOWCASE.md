# 📚 Complete Component Library Showcase

## All 28 Components - Usage Guide & Examples

---

## 📋 Table of Contents

### Basic Components (8)
1. [Button](#button)
2. [Card](#card)
3. [Badge](#badge)
4. [Divider](#divider)
5. [Avatar](#avatar)
6. [Breadcrumb](#breadcrumb)
7. [Pagination](#pagination)
8. [Skeleton](#skeleton)

### Form Components (6)
9. [Input](#input)
10. [Textarea](#textarea)
11. [Checkbox](#checkbox)
12. [Radio](#radio)
13. [Select](#select)
14. [Slider](#slider)

### Data Display Components (6)
15. [Progress](#progress)
16. [Rating](#rating)
17. [Tabs](#tabs)
18. [Accordion](#accordion)
19. [Table (coming soon)](#table)
20. [Timeline (coming soon)](#timeline)

### Interactive Components (8)
21. [Alert](#alert)
22. [Modal](#modal)
23. [Dropdown](#dropdown)
24. [Tooltip](#tooltip)
25. [Popover (coming soon)](#popover)
26. [Toast/Notification (coming soon)](#toast)
27. [Spinner](#spinner)
28. [Toggle](#toggle)

### Layout Components (2)
29. [Navbar](#navbar)
30. [Sidebar (coming soon)](#sidebar)

---

## 🎨 Basic Components

### Button

Interactive button component with multiple variants and sizes.

```jsx
import { Button } from '@lp-labs/ui-components/components';

// Basic buttons
<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>

// With Icon
<Button icon={<CheckIcon />}>Approve</Button>
```

**Props:** variant, size, loading, disabled, fullWidth, icon

---

### Card

Container component for grouping content.

```jsx
import { Card } from '@lp-labs/ui-components/components';

<Card elevation="md" padding="lg" border interactive>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</Card>
```

**Props:** elevation (none, sm, md, lg), padding (sm, md, lg), border, interactive

---

### Badge

Label component for status, categories, and tags.

```jsx
import { Badge } from '@lp-labs/ui-components/components';

<Badge variant="primary">New</Badge>
<Badge variant="success" dot>Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Error</Badge>
<Badge size="lg">Large Badge</Badge>
```

**Props:** variant, size (sm, md, lg), dot

---

### Divider

Visual separator component.

```jsx
import { Divider } from '@lp-labs/ui-components/components';

<Divider />
<Divider label="Or" />
<Divider orientation="vertical" />
<Divider variant="dashed" />
<Divider variant="dotted" />
```

**Props:** orientation (horizontal, vertical), variant (solid, dashed, dotted), label

---

### Avatar

User avatar component with status indicator.

```jsx
import { Avatar } from '@lp-labs/ui-components/components';

<Avatar src="avatar.jpg" size="md" variant="circle" />
<Avatar initials="JD" size="lg" variant="rounded" />
<Avatar status="online" size="md" />
<Avatar status="offline" />
```

**Props:** size (sm, md, lg, xl), variant (circle, square, rounded), initials, status

---

### Breadcrumb

Navigation breadcrumb component.

```jsx
import { Breadcrumb } from '@lp-labs/ui-components/components';

<Breadcrumb items={[
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics' }
]} />
```

**Props:** items, separator

---

### Pagination

Navigation for paginated content.

```jsx
import { Pagination } from '@lp-labs/ui-components/components';

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
/>
```

**Props:** currentPage, totalPages, onPageChange, maxVisible

---

### Skeleton

Loading placeholder component.

```jsx
import { Skeleton } from '@lp-labs/ui-components/components';

<Skeleton variant="text" count={3} />
<Skeleton variant="circle" width={50} height={50} />
<Skeleton variant="rectangular" width={200} height={200} />
```

**Props:** width, height, variant (text, circle, rectangular), count

---

## 📝 Form Components

### Input

Text input with validation support.

```jsx
import { Input } from '@lp-labs/ui-components/components';

<Input label="Email" type="email" placeholder="Enter email" />
<Input error errorMessage="Invalid email" />
<Input helpText="Password must be 8+ characters" />
<Input disabled />
<Input fullWidth />
```

**Props:** label, type, placeholder, error, errorMessage, helpText, disabled, fullWidth

---

### Textarea

Multi-line text input.

```jsx
import { Textarea } from '@lp-labs/ui-components/components';

<Textarea label="Message" placeholder="Enter message" rows={5} />
<Textarea resize="vertical" />
<Textarea resize="none" />
```

**Props:** label, resize (none, vertical, horizontal, both), error, errorMessage, helpText

---

### Checkbox

Checkbox input component.

```jsx
import { Checkbox } from '@lp-labs/ui-components/components';

<Checkbox label="I agree" />
<Checkbox checked={true} onChange={handleChange} />
<Checkbox disabled />
<Checkbox error errorMessage="Required" />
```

**Props:** label, checked, onChange, disabled, error, errorMessage

---

### Radio

Radio button input component.

```jsx
import { Radio, RadioGroup } from '@lp-labs/ui-components/components';

// Single radio
<Radio label="Option 1" value="option1" />

// Radio group
<RadioGroup
  options={[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' }
  ]}
  value={selected}
  onChange={setSelected}
/>
```

**Props:** label, value, onChange, disabled, error, errorMessage

---

### Select

Dropdown select input.

```jsx
import { Select } from '@lp-labs/ui-components/components';

<Select
  label="Choose"
  options={[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' }
  ]}
  onChange={handleChange}
/>
```

**Props:** label, options, error, errorMessage, helpText, fullWidth

---

### Slider

Range slider input.

```jsx
import { Slider } from '@lp-labs/ui-components/components';

<Slider label="Volume" min={0} max={100} step={1} showValue />
<Slider marks min={0} max={100} />
```

**Props:** label, min, max, step, showValue, marks

---

## 📊 Data Display Components

### Progress

Progress bar component.

```jsx
import { Progress } from '@lp-labs/ui-components/components';

<Progress value={65} max={100} showLabel />
<Progress value={75} variant="success" size="lg" />
<Progress value={45} variant="warning" animated />
```

**Props:** value, max, size (sm, md, lg), variant (primary, success, warning, danger), animated, showLabel

---

### Rating

Star rating component.

```jsx
import { Rating } from '@lp-labs/ui-components/components';

<Rating value={4} max={5} onChange={setRating} />
<Rating value={3} readonly color="warning" />
<Rating size="lg" />
```

**Props:** value, onChange, max, size (sm, md, lg), readonly, color (primary, warning, danger)

---

### Tabs

Tabbed content component.

```jsx
import { Tabs, TabList, TabTrigger, TabContent } from '@lp-labs/ui-components/components';

<Tabs defaultTab="tab1">
  <TabList>
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
  </TabList>
  <TabContent value="tab1">Content 1</TabContent>
  <TabContent value="tab2">Content 2</TabContent>
</Tabs>
```

**Props:** defaultTab, onTabChange

---

### Accordion

Collapsible accordion component.

```jsx
import { Accordion } from '@lp-labs/ui-components/components';

<Accordion
  items={[
    { id: '1', title: 'Section 1', content: 'Content 1' },
    { id: '2', title: 'Section 2', content: 'Content 2' }
  ]}
  allowMultiple={false}
/>
```

**Props:** items, allowMultiple

---

## 🎯 Interactive Components

### Alert

Notification/alert component.

```jsx
import { Alert } from '@lp-labs/ui-components/components';

<Alert variant="success" title="Success!">
  Operation completed successfully
</Alert>

<Alert
  variant="danger"
  title="Error"
  closeable
  onClose={handleClose}
>
  Something went wrong
</Alert>
```

**Props:** variant (success, warning, danger, info), title, closeable, onClose

---

### Modal

Dialog component for modals.

```jsx
import { Modal, ModalBody, ModalFooter } from '@lp-labs/ui-components/components';

<Modal
  open={isOpen}
  onClose={handleClose}
  title="Confirm Action"
  size="md"
>
  <ModalBody>Are you sure?</ModalBody>
  <ModalFooter>
    <Button onClick={handleClose}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </ModalFooter>
</Modal>
```

**Props:** open, onClose, title, size (sm, md, lg), closeButton

---

### Dropdown

Dropdown menu component.

```jsx
import { Dropdown, DropdownMenu, DropdownItem } from '@lp-labs/ui-components/components';

<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownMenu>
    <DropdownItem onClick={handleEdit}>Edit</DropdownItem>
    <DropdownItem onClick={handleDuplicate}>Duplicate</DropdownItem>
    <DropdownItem divider />
    <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

**Props:** trigger, open, onOpenChange

---

### Tooltip

Hover tooltip component.

```jsx
import { Tooltip } from '@lp-labs/ui-components/components';

<Tooltip content="Help text" position="top" delay={200}>
  <Button>Hover me</Button>
</Tooltip>
```

**Props:** content, position (top, bottom, left, right), delay

---

### Spinner

Loading spinner component.

```jsx
import { Spinner } from '@lp-labs/ui-components/components';

<Spinner size="md" variant="primary" />
<Spinner size="lg" variant="secondary" />
```

**Props:** size (sm, md, lg), variant (primary, secondary, danger, success)

---

### Toggle

Toggle/switch component.

```jsx
import { Toggle } from '@lp-labs/ui-components/components';

<Toggle
  checked={isEnabled}
  onChange={setIsEnabled}
  size="md"
/>
```

**Props:** checked, onChange, size (sm, md, lg), disabled

---

## 🏗️ Layout Components

### Navbar

Navigation bar component.

```jsx
import { Navbar, NavbarNav, NavbarItem, NavbarToggle } from '@lp-labs/ui-components/components';

<Navbar brand="MyApp">
  <NavbarNav>
    <NavbarItem active><a href="#">Home</a></NavbarItem>
    <NavbarItem><a href="#">About</a></NavbarItem>
  </NavbarNav>
  <NavbarToggle onClick={toggleMenu} />
</Navbar>
```

**Props:** brand, fluid

---

## 🚀 Quick Component Reference

| Component | Type | Use Case |
|-----------|------|----------|
| Button | Action | User interactions |
| Card | Container | Content grouping |
| Input | Form | Text input |
| Textarea | Form | Multi-line text |
| Checkbox | Form | Multiple selection |
| Radio | Form | Single selection |
| Select | Form | Dropdown selection |
| Slider | Form | Range selection |
| Modal | Modal | Dialogs, confirmations |
| Alert | Notification | Messages, alerts |
| Toast | Notification | Temporary notifications |
| Tooltip | Hint | Help text |
| Badge | Label | Status, tags |
| Avatar | Profile | User images |
| Progress | Status | Loading, completion |
| Rating | Feedback | Star ratings |
| Tabs | Navigation | Content switching |
| Accordion | Content | Collapsible sections |
| Pagination | Navigation | Page navigation |
| Breadcrumb | Navigation | Path navigation |
| Navbar | Layout | Top navigation |
| Dropdown | Menu | Action menus |
| Toggle | Control | Boolean selection |
| Spinner | Loader | Loading state |
| Divider | Visual | Content separation |
| Skeleton | Placeholder | Loading placeholder |

---

## 📦 Import Patterns

```javascript
// Import individual components
import { Button, Card, Input } from '@lp-labs/ui-components/components';

// Import multiple related components
import { Tabs, TabList, TabTrigger, TabContent } from '@lp-labs/ui-components/components';

// Import with utilities
import { Button } from '@lp-labs/ui-components/components';
import { cn, spacing } from '@lp-labs/ui-components/utilities';

// Import theme utilities
import { ThemeProvider, useTheme } from '@lp-labs/ui-components/theme';

// Import styles
import '@lp-labs/ui-components/styles';
```

---

## 💡 Component Categories

### By Complexity
- **Simple**: Badge, Divider, Skeleton, Spinner
- **Medium**: Button, Card, Input, Progress, Rating
- **Complex**: Modal, Tabs, Accordion, Dropdown, Navbar

### By Purpose
- **User Input**: Input, Textarea, Checkbox, Radio, Select, Slider
- **Feedback**: Alert, Progress, Rating, Toast, Tooltip
- **Navigation**: Navbar, Breadcrumb, Pagination, Tabs, Accordion
- **Content**: Card, Badge, Avatar, Divider, Skeleton

### By State Management
- **Uncontrolled**: Button, Card, Badge, Alert, Tooltip, Spinner
- **Controlled**: Input, Checkbox, Radio, Select, Slider, Toggle, Tabs, Accordion, Pagination

---

## ✨ Features Overview

All 28 components include:
- ✅ Full TypeScript support
- ✅ React 18+ compatibility
- ✅ WCAG 2.1 AA accessibility
- ✅ Responsive design
- ✅ Theme customization
- ✅ Dark mode support
- ✅ Prop forwarding & refs
- ✅ Comprehensive documentation

