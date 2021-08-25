import type { JSX } from 'solid-js/jsx-runtime';
import { createStore } from 'solid-js/store';

interface BaseOption {
  label: string;
  name: string;
}

interface SelectOption extends BaseOption {
  type: 'select';
  default: string | number;
  items: Array<{ value: string | number; label: string }>;
}

interface TextOption extends BaseOption {
  type: 'text';
  default: string;
  min?: number;
  max?: number;
}

interface BooleanOption extends BaseOption {
  type: 'boolean';
  default: boolean;
}

type Option = TextOption | BooleanOption | SelectOption;

interface Props<Options extends ReadonlyArray<Option>> {
  children: (options: Record<string, any>) => JSX.Element;
  options: Options;
}

interface OptionComponentProps<OptionType extends Option> {
  option: OptionType;
  value: OptionType['default'];
  setValue: (val: OptionType['default']) => void;
}

function BooleanOpt({
  option,
  value,
  setValue,
}: OptionComponentProps<BooleanOption>) {
  return (
    <label className="flex items-center text-base font-medium text-gray-700 dark:text-white w-full border-b border-gray-300 dark:border-gray-700 p-3">
      <input
        type="checkbox"
        className="focus:ring-indigo-500 dark:ring-offset-gray-800 h-4 w-4 text-indigo-600 border-gray-300 dark:bg-gray-600 dark:border-gray-400 rounded shadow-sm mr-3"
        onChange={(e) => setValue(e.currentTarget.checked)}
        checked={value}
      />
      {option.label}
    </label>
  );
}

function SelectOpt({
  option,
  value,
  setValue,
}: OptionComponentProps<SelectOption>) {
  return (
    <div className="flex flex-col w-full border-b border-gray-300 dark:border-gray-700 p-3">
      <label
        htmlFor={`option-${option.name}`}
        className="block text-base font-medium text-gray-700 dark:text-white"
      >
        {option.label}
      </label>
      <select
        id={`option-${option.name}`}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:bg-gray-600 dark:text-white dark:border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 dark:focus:border-indigo-500 text-base"
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        {option.items.map((item) => (
          <option value={item.value} selected={item.value === value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextOpt({
  option,
  value,
  setValue,
}: OptionComponentProps<TextOption>) {
  return (
    <div className="flex flex-col p-3 w-full border-b border-gray-300 dark:border-gray-700">
      <label
        htmlFor={`option-${option.name}`}
        className="block text-base font-medium text-gray-700 dark:text-white"
      >
        {option.label}
      </label>
      <input
        type="text"
        id={`option-${option.name}`}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-base border-gray-300 rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-400 dark:focus:border-indigo-500"
        value={value}
        minLength={option.min}
        maxLength={option.max}
        onInput={(e) => {
          const { value: newValue } = e.currentTarget;
          if (option.min && newValue.length < option.min) {
            return;
          }
          if (option.max && newValue.length > option.max) {
            return;
          }
          setValue(newValue);
        }}
      />
    </div>
  );
}

const componentMap = {
  boolean: BooleanOpt,
  select: SelectOpt,
  text: TextOpt,
};

export function ExampleBox<Options extends ReadonlyArray<Option>>({
  children,
  options,
}: Props<Options>) {
  const defaultOptions = options.reduce((acc, option) => {
    acc[option.name] = option.default;
    return acc;
  }, {});

  const [state, setState] = createStore<Record<string, any>>(defaultOptions);

  return (
    <div className="border rounded-md border border-gray-300 flex dark:border-gray-700">
      <div className="flex w-4/6 items-center justify-center p-3">
        {children(state)}
      </div>
      <aside className="flex flex-col w-2/6 items-start border-l border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-r-md">
        {options.map((option) => {
          const Component = componentMap[option.type];

          return (
            <Component
              option={option}
              value={state[option.name]}
              setValue={(newValue) => setState({ [option.name]: newValue })}
            />
          );
        })}
      </aside>
    </div>
  );
}
