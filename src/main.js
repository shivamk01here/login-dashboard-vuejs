// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import our configured router
import './assets/main.css'; // Import our Tailwind CSS setup

// Create the Vue application instance
const app = createApp(App);

// Use the router throughout the application
app.use(router);

// Mount the application to the '#app' div in index.html
app.mount('#app');