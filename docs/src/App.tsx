import { useRoutes } from 'solid-app-router';
import { useColorMode } from '@zippy-ui/core/dist/hooks/useColorMode';
import Index from './pages/index';
import Badge from './pages/badge';
import Button from './pages/button';
import Components from './pages/components';

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/components',
    component: Components,
    children: [
      {
        path: 'badge',
        component: Badge,
      },
      {
        path: 'button',
        component: Button,
      },
    ],
  },
];

function App() {
  const Routes = useRoutes(routes);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-10 text-center">
        <p className="text-3xl leading-8 font-extrabold tracking-tight">
          ⚡ Zippy UI
        </p>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
          Lightning fast components for Solid
        </p>
        <button type="button" onClick={() => toggleColorMode()}>
          {colorMode() === 'light' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
      <div className="container mx-auto mt-10 flex">
        <Routes />
      </div>
    </>
  );
}

export default App;
