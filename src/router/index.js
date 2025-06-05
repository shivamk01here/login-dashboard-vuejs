// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue'; // Import our Login component
import DashboardPage from '../components/DashboardPage.vue'; // A placeholder for a future dashboard

// Define our routes (URL paths mapped to components)
const routes = [
  {
    path: '/', // The root path (e.g., http://localhost:5173/)
    name: 'Login',
    component: LoginPage, // Show the LoginPage component
  },
  {
    path: '/dashboard', // A different path (e.g., http://localhost:5173/dashboard)
    name: 'Dashboard',
    component: DashboardPage, // Show the DashboardPage component
    // You'd typically add a meta field like `meta: { requiresAuth: true }` here
    // for protected routes.
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode (clean URLs like /login, not /#/login)
  routes, // Pass our defined routes
});

// Export the router so it can be used in main.js
export default router;