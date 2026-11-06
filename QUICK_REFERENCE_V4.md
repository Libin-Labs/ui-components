# UI Components v4.0.0 - Quick Reference Guide

## Quick Stats
- **Total Components:** 200+
- **New in v4.0.0:** 160+
- **Categories:** 11
- **TypeScript:** 100% coverage
- **Status:** Production Ready

---

## 🚀 Quick Start

### Installation
```bash
npm install @lp-labs/ui-components
```

### Basic Usage
```tsx
import { ButtonPrimary, CardBasic, InputEmail } from '@lp-labs/ui-components';

export default function App() {
  return (
    <CardBasic shadow="lg">
      <h1>Welcome</h1>
      <InputEmail label="Email" />
      <ButtonPrimary>Submit</ButtonPrimary>
    </CardBasic>
  );
}
```

---

## 📋 Component Cheat Sheet

### Button Variants
```tsx
import { 
  ButtonPrimary, ButtonSecondary, ButtonOutline, 
  ButtonGhost, ButtonLink, ButtonIcon, ButtonLoading 
} from '@lp-labs/ui-components';

<ButtonPrimary size="lg" state="hover">Primary</ButtonPrimary>
<ButtonSecondary>Secondary</ButtonSecondary>
<ButtonOutline icon={<Icon />}>Outline</ButtonOutline>
<ButtonGhost>Ghost</ButtonGhost>
<ButtonLink>Link Style</ButtonLink>
<ButtonIcon icon={<SaveIcon />} />
<ButtonLoading loading={true}>Processing...</ButtonLoading>
```

### Form Inputs
```tsx
import { 
  InputText, InputEmail, InputPassword, InputNumber,
  InputDate, InputTime, InputTel, InputUrl, InputSearch
} from '@lp-labs/ui-components';

<InputText label="Name" size="md" />
<InputEmail label="Email" error="Invalid" />
<InputPassword label="Password" onTogglePassword={toggle} />
<InputNumber label="Qty" min={0} max={100} />
<InputDate label="Start Date" />
<InputTime label="Time" />
<InputTel label="Phone" prefix="+1" />
<InputUrl label="Website" />
<InputSearch onSearch={handleSearch} />
```

### Cards
```tsx
import { 
  CardBasic, CardImage, CardHorizontal, CardExpanding,
  CardInteractive, CardGradient, CardMinimal, CardBordered
} from '@lp-labs/ui-components';

<CardBasic shadow="md">Simple card</CardBasic>
<CardImage image={url} imageHeight="md">With image</CardImage>
<CardHorizontal image={url} imageWidth="lg">Side image</CardHorizontal>
<CardExpanding>Expandable content</CardExpanding>
<CardInteractive onClick={handle} isActive={true}>Interactive</CardInteractive>
<CardGradient gradient="blue">Gradient BG</CardGradient>
<CardMinimal>No shadow</CardMinimal>
<CardBordered borderColor="blue" borderSize="md">Bordered</CardBordered>
```

### Modals
```tsx
import {
  ModalStandard, ModalAlert, ModalConfirm, 
  ModalSidebar, ModalFullscreen, ModalCentered, ModalScrollable
} from '@lp-labs/ui-components';

<ModalStandard isOpen={open} onClose={close} size="md">Content</ModalStandard>
<ModalAlert isOpen={open} title="Alert" message="Something happened" />
<ModalConfirm isOpen={open} title="Confirm?" onConfirm={confirm} />
<ModalSidebar isOpen={open} position="right">Side content</ModalSidebar>
<ModalFullscreen isOpen={open} title="Full View">Full content</ModalFullscreen>
```

### Navigation
```tsx
import {
  NavHorizontal, NavVertical, NavTabs, NavPills,
  NavBreadcrumbs, NavSteps, NavTree, NavMegamenu
} from '@lp-labs/ui-components';

const navItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'About', active: true }
];

<NavHorizontal items={navItems} />
<NavVertical items={navItems} />
<NavTabs items={navItems} />
<NavPills items={navItems} />
<NavBreadcrumbs items={navItems} />
<NavSteps items={navItems} currentStep={1} />
<NavTree items={navItems} expandable />
<NavMegamenu items={navItems} />
```

### Tables
```tsx
import {
  TableBasic, TableSortable, TableFilterable,
  TableExpandable, TableCompact
} from '@lp-labs/ui-components';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', filterable: true }
];
const data = [{ name: 'John', email: 'john@example.com' }];

<TableBasic columns={columns} data={data} />
<TableSortable columns={columns} data={data} />
<TableFilterable columns={columns} data={data} />
<TableExpandable columns={columns} data={data} />
<TableCompact columns={columns} data={data} />
```

### Layouts
```tsx
import {
  GridAuto, GridResponsive, GridMasonry, GridFixedCol,
  Container, Flex, Stack, AspectRatio
} from '@lp-labs/ui-components';

<Container maxWidth="lg">Container content</Container>
<GridAuto gap="md" minWidth="250px">Items</GridAuto>
<GridResponsive cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">Items</GridResponsive>
<GridMasonry gap="md">Items</GridMasonry>
<Flex direction="row" gap="md" justify="between">Items</Flex>
<Stack direction="vertical" gap="md">Items</Stack>
<AspectRatio ratio="16/9">Video or image</AspectRatio>
```

### Typography
```tsx
import {
  Heading, Paragraph, Quote, Code, Label,
  Caption, Badge, Text, Truncated
} from '@lp-labs/ui-components';

<Heading level={1} size="3xl">Title</Heading>
<Heading level={2} size="2xl">Subtitle</Heading>
<Paragraph color="muted">Body text</Paragraph>
<Quote>Important quote</Quote>
<Code inline>var x = 5;</Code>
<Label required>Form Label</Label>
<Caption>Small text</Caption>
<Badge variant="solid" colorScheme="blue">New</Badge>
<Truncated lines={2}>Long text...</Truncated>
```

### Loading & Feedback
```tsx
import {
  SpinnerDots, SpinnerRing, SpinnerBar, SpinnerBounce, SpinnerPulse,
  SkeletonText, SkeletonCard, SkeletonImage, SkeletonTable,
  ProgressLinear, ProgressCircular, ProgressStepped, Overlay
} from '@lp-labs/ui-components';

<SpinnerDots size="md" color="blue" />
<SpinnerRing size="lg" />
<ProgressLinear value={60} max={100} showLabel />
<ProgressCircular value={75} max={100} />
<SkeletonCard />
<SkeletonText lines={3} />
<Overlay isVisible={loading}><SpinnerRing /></Overlay>
```

### Utilities
```tsx
import {
  Tooltip, Popover, ContextMenu, Notification,
  Badge, Pill, Tag, Chip, Counter, Flag
} from '@lp-labs/ui-components';

<Tooltip content="Help" position="top">Hover me</Tooltip>
<Popover trigger={<span>Menu</span>}>Popover content</Popover>
<Notification type="success" title="Done!">Task completed</Notification>
<Badge variant="solid" color="blue" count={5}>Icon</Badge>
<Pill color="blue">Removable</Pill>
<Tag variant="solid" color="green">Tag</Tag>
<Chip onDelete={handleDelete}>Item</Chip>
<Counter value={5} onChange={setCount} />
<Flag text="New" color="red" />
```

### Advanced
```tsx
import {
  FormBuilder, TableBuilder, Dashboard,
  Wizard, KanbanBoard, Timeline, OrgChart
} from '@lp-labs/ui-components';

<FormBuilder
  fields={[{ id: 'email', type: 'email', label: 'Email' }]}
  onSubmit={handle}
/>

<Dashboard title="Dashboard" widgets={widgets} columns={3} />

<Wizard
  steps={[{ title: 'Step 1', content: <div>Form</div> }]}
  onComplete={handle}
/>

<KanbanBoard columns={[
  { id: 'todo', title: 'To Do', cards: [...] }
]} />

<Timeline items={[
  { id: '1', title: 'Event 1', timestamp: 'Now' }
]} />

<OrgChart root={{ name: 'CEO', children: [...] }} />
```

---

## 🎯 Common Patterns

### Form with Validation
```tsx
export function MyForm() {
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  return (
    <div className="space-y-4">
      <InputEmail
        value={data.email}
        error={errors.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <InputPassword
        value={data.password}
        error={errors.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <ButtonPrimary onClick={handleSubmit}>Submit</ButtonPrimary>
    </div>
  );
}
```

### Responsive Grid
```tsx
<GridResponsive cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="lg">
  {items.map(item => (
    <CardImage key={item.id} image={item.image}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </CardImage>
  ))}
</GridResponsive>
```

### Modal with Confirm
```tsx
const [isOpen, setIsOpen] = useState(false);

<ButtonPrimary onClick={() => setIsOpen(true)}>Delete</ButtonPrimary>
<ModalConfirm
  isOpen={isOpen}
  title="Delete Item?"
  message="This cannot be undone"
  isDangerous={true}
  onConfirm={() => {
    handleDelete();
    setIsOpen(false);
  }}
  onClose={() => setIsOpen(false)}
/>
```

### Data Table with Actions
```tsx
<TableSortable
  columns={[
    { key: 'id', header: 'ID', sortable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'status', header: 'Status' }
  ]}
  data={records}
  onSort={handleSort}
/>
```

---

## 🎨 Styling & Customization

### Using className
```tsx
<ButtonPrimary className="rounded-full uppercase">
  Custom Style
</ButtonPrimary>
```

### Size Presets
```tsx
// All components with size prop support:
<Component size="sm|md|lg" />
```

### Color/Variant Options
```tsx
// Most components support these:
<Component 
  variant="solid|outline|ghost"
  color="blue|green|red|yellow|purple"
  size="sm|md|lg"
/>
```

---

## 📱 Responsive Patterns

### Conditional Rendering
```tsx
import { useMediaQuery } from 'react-responsive';

export function ResponsiveNav() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? <NavVertical /> : <NavHorizontal />;
}
```

### Tailwind Responsive
```tsx
<GridResponsive 
  cols={{ sm: 1, md: 2, lg: 3 }} 
  gap="md"
>
  Items adapt to screen size
</GridResponsive>
```

---

## ⚡ Performance Tips

1. **Lazy load modals** - Only render when needed
2. **Memoize callbacks** - Prevent unnecessary re-renders
3. **Use Container query** - For responsive sub-components
4. **Tree shake imports** - Import only needed components
5. **Optimize tables** - Use pagination/virtualization for large datasets

---

## 🔧 TypeScript Support

All components have full TypeScript support:

```tsx
import type { ButtonVariantProps, CardVariantProps } from '@lp-labs/ui-components';

const config: ButtonVariantProps = {
  size: 'lg',
  state: 'hover',
  icon: <Icon />
};
```

---

## 🆘 Troubleshooting

### Styles not loading
- Ensure CSS is imported: `import '@lp-labs/ui-components/styles'`

### TypeScript errors
- Update types: `npm install --save-dev @types/react@latest`

### Accessibility warnings
- All components follow WCAG 2.1 AA standards
- Use semantic HTML wrappers
- Add proper ARIA labels

---

## 📚 Resources

- Full Docs: [COMPONENTS_V4_COMPLETE.md](./COMPONENTS_V4_COMPLETE.md)
- GitHub: https://github.com/lp-labs/flow
- Issues: https://github.com/lp-labs/flow/issues

---

**Version:** 4.0.0 | **Updated:** November 2024 | **Maintainer:** LP Labs
