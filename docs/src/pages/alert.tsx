import { Alert } from '@zippy-ui/core/dist/components/Alert';
import { ExampleBox } from '../components/ExampleBox';

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default function Page() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Alert</h2>

      <ExampleBox
        options={[
          {
            type: 'boolean',
            default: true,
            label: 'Show icon',
            name: 'icon',
          },
          {
            type: 'boolean',
            default: true,
            label: 'Show title',
            name: 'title',
          },
          {
            type: 'select',
            default: 'solid',
            items: [
              { value: 'outlined', label: 'Outlined' },
              { value: 'solid', label: 'Solid' },
            ],
            label: 'Variant',
            name: 'variant',
          },
          {
            type: 'select',
            default: 'info',
            items: [
              { value: 'danger', label: 'Danger' },
              { value: 'success', label: 'Success' },
              { value: 'warning', label: 'Warning' },
              { value: 'info', label: 'Info' },
              { value: 'none', label: 'None' },
            ],
            label: 'Intent',
            name: 'intent',
          },
          {
            type: 'select',
            default: 'default',
            items: [
              { value: 'small', label: 'Small' },
              { value: 'default', label: 'Default' },
              { value: 'large', label: 'Large' },
            ],
            label: 'Size',
            name: 'size',
          },
        ]}
      >
        {({ icon, title, intent, size, variant }) => (
          <Alert
            title={title && 'Test title'}
            intent={intent}
            size={size}
            variant={variant}
            icon={icon && WarningIcon}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Alert>
        )}
      </ExampleBox>
    </>
  );
}
