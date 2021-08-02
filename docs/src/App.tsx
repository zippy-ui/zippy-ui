import { useRoutes, Link } from 'solid-app-router';
import Badge from './index';
import Button from './button';

const routes = [
  {
    path: '/',
    component: Badge,
  },
  {
    path: '/button',
    component: Button,
  },
];

function App() {
  const Routes = useRoutes(routes);

  return (
    <>
      <div class="container mx-auto mt-10 flex">
        <article class="prose prose-xl">
          <h2>⚡ Zippy UI</h2>
          <p class="lead -top-6 relative">Lightning fast components for Solid</p>
        </article>
      </div>
      <div class="container mx-auto mt-10 flex">
        <div class="flex flex-col w-96 pr-8 -ml-3">
          <h5 class="px-3 mb-3 uppercase tracking-wide font-semibold text-xs text-gray-900">Components</h5>
          <Link href="/" class="hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Badge</Link>
          <Link href="/button" class="hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Button</Link>
        </div>
        <article class="prose prose-xl">
          <Routes />
        </article>
      </div>
    </>
  );
}

export default App;
