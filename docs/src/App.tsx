import { useRoutes } from 'solid-app-router';
import Index from './index';

const routes = [
  {
    path: '/',
    component: Index,
  },
];

function App() {
  const Routes = useRoutes(routes);

  return (
    <article class="prose prose-xl mx-auto mt-10">
      <Routes />
    </article>
  );
}

export default App;
