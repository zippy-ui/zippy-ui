import { createSignal, onMount } from 'solid-js';

type ColorMode = 'dark' | 'light';

export const useColorMode = () => {
  const [colorMode, setColorMode] = createSignal<ColorMode | null>(null);

  onMount(() => {
    setColorMode(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    );
  });

  const setter = (newMode: ColorMode) => {
    setColorMode(newMode);

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newMode);

    localStorage.setItem('mode', newMode);
  };

  return {
    colorMode,
    setColorMode: setter,
    toggleColorMode: () => setter(colorMode() === 'dark' ? 'light' : 'dark'),
  };
};
