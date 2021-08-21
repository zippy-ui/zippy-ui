import { Badge } from '@zippy-ui/core/dist/components/Badge';
import { ExampleBox } from '../components/ExampleBox';

export default function Page() {
  return (
    <>
      <h3>Badge</h3>

      <ExampleBox
        options={[
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
            default: 'danger',
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
          {
            type: 'text',
            default: 'Badge label',
            label: 'Content',
            name: 'content',
            min: 1,
            max: 20,
          },
        ]}
      >
        {({ intent, size, variant, content }) => (
          <Badge intent={intent} size={size} variant={variant}>
            {content}
          </Badge>
        )}
      </ExampleBox>
    </>
  );
}
