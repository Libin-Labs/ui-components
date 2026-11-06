import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Modal,
  Badge,
  Alert,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarItem,
  NavbarToggle,
  ThemeProvider,
  useTheme,
} from '@lp-labs/ui-components';
import '@lp-labs/ui-components/styles';

/**
 * Complete UI Library Demo
 * Showcases all components and features
 */

export function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <Card padding="lg" border>
      <h3 className="text-xl font-semibold mb-4">Button Component</h3>
      <div className="flex gap-3 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button
          loading={loading}
          onClick={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 2000);
          }}
        >
          {loading ? 'Loading...' : 'Click me'}
        </Button>
        <Button disabled>Disabled</Button>
        <Button fullWidth>Full Width</Button>
      </div>
    </Card>
  );
}

export function CardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card elevation="sm">
        <h4 className="font-semibold mb-2">Small Shadow</h4>
        <p className="text-gray-600">Card with small elevation</p>
      </Card>
      <Card elevation="md" interactive>
        <h4 className="font-semibold mb-2">Medium Shadow</h4>
        <p className="text-gray-600">Hover to see interactive effect</p>
      </Card>
      <Card elevation="lg" border>
        <h4 className="font-semibold mb-2">Large Shadow</h4>
        <p className="text-gray-600">Card with border and large shadow</p>
      </Card>
    </div>
  );
}

export function InputDemo() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setEmailError(!val.includes('@'));
  };

  return (
    <Card padding="lg" border>
      <h3 className="text-xl font-semibold mb-4">Input Component</h3>
      <div className="space-y-4">
        <Input
          label="Text Input"
          placeholder="Enter text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helpText="This is helper text"
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          errorMessage={emailError ? 'Please enter a valid email' : ''}
        />
        <Input
          label="Disabled Input"
          placeholder="You cannot type here"
          disabled
        />
      </div>
    </Card>
  );
}

export function BadgeDemo() {
  return (
    <Card padding="lg" border>
      <h3 className="text-xl font-semibold mb-4">Badge Component</h3>
      <div className="flex flex-wrap gap-3">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    </Card>
  );
}

export function AlertDemo() {
  const [alerts, setAlerts] = useState({
    success: true,
    warning: true,
    danger: true,
    info: true,
  });

  const closeAlert = (key) => {
    setAlerts((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <Card padding="lg" border>
      <h3 className="text-xl font-semibold mb-4">Alert Component</h3>
      <div className="space-y-3">
        {alerts.success && (
          <Alert
            variant="success"
            title="Success!"
            closeable
            onClose={() => closeAlert('success')}
          >
            This is a success message. Something went well!
          </Alert>
        )}
        {alerts.warning && (
          <Alert
            variant="warning"
            title="Warning"
            closeable
            onClose={() => closeAlert('warning')}
          >
            Please be careful. This action may have consequences.
          </Alert>
        )}
        {alerts.danger && (
          <Alert
            variant="danger"
            title="Error"
            closeable
            onClose={() => closeAlert('danger')}
          >
            An error occurred. Please try again.
          </Alert>
        )}
        {alerts.info && (
          <Alert
            variant="info"
            title="Info"
            closeable
            onClose={() => closeAlert('info')}
          >
            This is an informational message.
          </Alert>
        )}
      </div>
    </Card>
  );
}

export function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal Example">
        <div className="space-y-4">
          <p>This is a modal dialog component.</p>
          <p>You can customize its size, content, and behavior.</p>
          <div className="flex gap-2 justify-end">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function DropdownDemo() {
  const [selected, setSelected] = useState(null);

  return (
    <Dropdown
      trigger={
        <Button variant="secondary">
          {selected || 'Open Menu'} ▼
        </Button>
      }
    >
      <DropdownMenu>
        <DropdownItem onClick={() => setSelected('Option 1')}>
          Option 1
        </DropdownItem>
        <DropdownItem onClick={() => setSelected('Option 2')}>
          Option 2
        </DropdownItem>
        <DropdownItem onClick={() => setSelected('Option 3')}>
          Option 3
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => setSelected('Delete')}>
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export function NavbarDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar brand="MyApp">
      <NavbarNav>
        <NavbarItem active>
          <a href="#home">Home</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#features">Features</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about">About</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact">Contact</a>
        </NavbarItem>
      </NavbarNav>
      <NavbarToggle
        open={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </Navbar>
  );
}

export function ThemeDemo() {
  const theme = useTheme();

  return (
    <Card padding="lg" border>
      <h3 className="text-xl font-semibold mb-4">Theme Configuration</h3>
      <div className="space-y-2 text-sm">
        <p>
          <strong>Primary Color:</strong> {theme.colors.primary}
        </p>
        <p>
          <strong>Base Spacing:</strong> {theme.spacing.md}
        </p>
        <p>
          <strong>Border Radius:</strong> {theme.borderRadius.md}
        </p>
        <p>
          <strong>Font Family:</strong> {theme.typography.fontFamily}
        </p>
      </div>
    </Card>
  );
}

export function App() {
  return (
    <ThemeProvider theme="light">
      <div className="min-h-screen bg-gray-50">
        <NavbarDemo />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">UI Components Library</h1>
            <p className="text-gray-600">
              A comprehensive collection of accessible, customizable React components
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
              <ButtonDemo />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cards</h2>
              <CardDemo />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
              <InputDemo />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Badges</h2>
              <BadgeDemo />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
              <AlertDemo />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Modals</h2>
              <ModalDemo />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Dropdowns</h2>
              <DropdownDemo />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Theme Configuration</h2>
              <ThemeDemo />
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
