import type { JSX } from 'solid-js/jsx-runtime';
import { createStore } from 'solid-js/store';

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

export function ExampleBox<Options extends ReadonlyArray<Option>>({
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
