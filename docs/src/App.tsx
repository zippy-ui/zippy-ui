import { useRoutes } from 'solid-app-router';
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

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ⚡ Zippy UI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lightning fast components for Solid
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex">
        <Routes />
      </div>
    </>
  );
}

export default App;
