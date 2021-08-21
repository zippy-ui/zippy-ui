import { Button } from '@zippy-ui/core/dist/components/Button';
import { JSX } from 'solid-js/jsx-runtime';
import { createStore } from 'solid-js/store';

const ArchiveIcon = () => (
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
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

const InfoIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

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

const SaveIcon = () => (
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
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const DangerIcon = () => (
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
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const RightArrow = () => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface BaseOption {
  label: string;
  name: string;
}

interface SelectOption extends BaseOption {
  type: 'select';
  default: string;
  items: Array<{ value: string; label: string }>;
}

interface StringOption extends BaseOption {
  type: 'string';
  default: string;
}

interface BooleanOption extends BaseOption {
  type: 'boolean';
  default: boolean;
}

type Option = StringOption | BooleanOption | SelectOption;

interface Props<Options extends ReadonlyArray<Option>> {
  children: (options: Record<string, any>) => JSX.Element;
  options: Options;
}

function ExampleBox<Options extends ReadonlyArray<Option>>({
  children,
  options,
}: Props<Options>) {
  const defaultOptions = options.reduce((acc, option) => {
    acc[option.name] = option.default;
    return acc;
  }, {});

  const [state, setState] = createStore(defaultOptions);

  return (
    <div className="border rounded-md border border-gray-300 flex dark:border-gray-700">
      <div className="flex w-3/4 items-center justify-center p-3">
        {children(state)}
      </div>
      <aside className="flex flex-col w-1/4 items-start border-l border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-r-md">
        {options.map((option) =>
          option.type === 'boolean' ? (
            <div className="flex items-center w-full border-b border-gray-300 dark:border-gray-700 p-3">
              <div className="flex items-center h-5">
                <input
                  id={`option-${option.name}`}
                  type="checkbox"
                  className="focus:ring-indigo-500 dark:ring-offset-gray-800 h-4 w-4 text-indigo-600 border-gray-300 dark:bg-gray-600 dark:border-gray-400 rounded"
                  onChange={(e) =>
                    setState({ [option.name]: e.target.checked })
                  }
                  checked={state[option.name]}
                />
              </div>
              <div className="ml-3 text-base">
                <label
                  htmlFor={`option-${option.name}`}
                  className="font-medium text-gray-700 dark:text-white"
                >
                  {option.label}
                </label>
              </div>
            </div>
          ) : option.type === 'select' ? (
            <div className="flex flex-col w-full border-b border-gray-300 dark:border-gray-700 p-3">
              <label
                htmlFor={`option-${option.name}`}
                className="block text-base font-medium text-gray-700 dark:text-white"
              >
                {option.label}
              </label>
              <select
                id={`option-${option.name}`}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:bg-gray-600 dark:text-white dark:border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 dark:focus:border-indigo-500 sm:text-base"
                onChange={(e) => setState({ [option.name]: e.target.value })}
                value={state[option.name]}
              >
                {option.items.map((item) => (
                  <option value={item.value}>{item.label}</option>
                ))}
              </select>
            </div>
          ) : null,
        )}
      </aside>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <h2>Button</h2>

      <ExampleBox
        options={[
          {
            type: 'boolean',
            default: false,
            label: 'Start icon',
            name: 'startIcon',
          },
          {
            type: 'boolean',
            default: false,
            label: 'End icon',
            name: 'endIcon',
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
        {({ startIcon, endIcon, intent, size, variant }) => (
          <Button
            intent={intent}
            startIcon={startIcon && DangerIcon}
            endIcon={endIcon && RightArrow}
            size={size}
            variant={variant}
          >
            Button label
          </Button>
        )}
      </ExampleBox>
    </>
  );
}
