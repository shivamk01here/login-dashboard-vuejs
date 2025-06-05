<template>
    <!--
      The outer div sets up the full screen layout using Tailwind CSS:
      - h-screen: takes full viewport height
      - flex, items-center, justify-center: centers the content (our login card) vertically and horizontally
      - bg-gray-100: light gray background color
    -->
    <div class="h-screen flex items-center justify-center bg-gray-100 font-inter">
      <!-- 
        This div acts as our login card:
        - bg-white: white background
        - p-8: padding all around
        - rounded-lg: rounded corners for a softer look
        - shadow-lg: adds a subtle shadow
        - w-full max-w-md: makes it responsive, takes full width on small screens, max 448px on larger
        - flex flex-col items-center: centers content inside the card
      -->
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Login</h2>
        
        <!-- Username Input Field -->
        <div class="mb-4 w-full">
          <label for="username" class="block text-gray-700 text-sm font-semibold mb-2">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your username"
          />
        </div>
  
        <!-- Password Input Field -->
        <div class="mb-6 w-full">
          <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>
  
        <!-- Login Button -->
        <button
          @click="handleLogin"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full"
        >
          Login
        </button>
  
        <!-- Message Display (e.g., for login success/error) -->
        <p v-if="message" :class="messageType === 'error' ? 'text-red-500' : 'text-green-500'" class="mt-4 text-center">
          {{ message }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'; // Import 'ref' for reactive variables
  import { useRouter } from 'vue-router'; // Import useRouter to navigate
  
  // 1. Reactive Data using `ref`:
  // `ref` is a Vue 3 function that makes a variable "reactive".
  // This means if its value changes, any part of the template that uses it will automatically update.
  const username = ref(''); // Stores the value of the username input
  const password = ref(''); // Stores the value of the password input
  const message = ref('');  // Stores any feedback message for the user (e.g., "Login successful!")
  const messageType = ref(''); // Stores the type of message ('success' or 'error')
  
  // Get the router instance to programmatically navigate between routes
  const router = useRouter();
  
  // 2. Event Handler Function:
  // This function is called when the "Login" button is clicked.
  const handleLogin = () => {
    // Clear previous messages
    message.value = '';
    messageType.value = '';
  
    // Basic validation (for a real app, this would be more robust)
    if (username.value === '' || password.value === '') {
      message.value = 'Please enter both username and password.';
      messageType.value = 'error';
      return; // Stop the function here
    }
  
    // In a real application, you would send these credentials to your backend server
    // using an HTTP request (e.g., with Axios or Fetch API).
    // The backend would then verify the credentials against a database.
  
    // For this example, we'll simulate a successful login after a short delay
    // if the credentials match a hardcoded value.
    if (username.value === 'user' && password.value === 'password') {
      message.value = 'Login successful! Redirecting...';
      messageType.value = 'success';
      console.log('Login attempt:', username.value, password.value); // Log to console
  
      // After a successful login (simulated), redirect to the dashboard
      setTimeout(() => {
        router.push('/dashboard'); // Navigate to the /dashboard route
      }, 1500); // Wait 1.5 seconds before redirecting
  
    } else {
      // If credentials don't match
      message.value = 'Invalid username or password.';
      messageType.value = 'error';
      console.log('Login failed for:', username.value); // Log to console
    }
  };
  </script>
  
  <style scoped>
  /* 'scoped' means these styles only apply to this component.
    However, for this specific component, we are relying heavily on Tailwind CSS utility classes
    directly in the template, so there's not much custom CSS needed here.
  */
  </style>