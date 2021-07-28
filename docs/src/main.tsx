import { render } from 'solid-js/web';
import App from './App';
import './index.css';
import { Router } from 'solid-app-router';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root'),
);
