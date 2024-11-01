// src/routes.js
import Dashboard from './view/Dashboard';
import About from './view/About';

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/about', name: 'About', component: About },
];

export default routes;
