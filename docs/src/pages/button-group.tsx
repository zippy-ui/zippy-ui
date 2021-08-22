import { Button } from '@zippy-ui/core/dist/components/Button';
import { ButtonGroup } from '@zippy-ui/core/dist/components/ButtonGroup';
import { ExampleBox } from '../components/ExampleBox';

export default function Page() {
  const allIntents = ['danger', 'warning', 'success', 'info', 'none'];

  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Button group</h2>

      <ExampleBox
        options={[
          {
            type: 'select',
            default: 3,
            items: [
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
            ],
            label: 'Count',
            name: 'count',
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
            default: 'danger',
            items: [
              { value: 'mixed', label: 'Mixed' },
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
            default: 'Button',
            label: 'Content',
            name: 'content',
            min: 1,
            max: 20,
          },
        ]}
      >
        {({ count, intent, size, variant, content }) => (
          <ButtonGroup>
            {Array.from({ length: count }).map((_, i) => (
              <Button
                intent={intent === 'mixed' ? allIntents[i] : intent}
                size={size}
                variant={variant}
              >
                {content}
              </Button>
            ))}
          </ButtonGroup>
        )}
      </ExampleBox>
    </>
  );
}
