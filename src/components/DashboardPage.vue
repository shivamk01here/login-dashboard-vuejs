<template>
    <div class="h-screen flex flex-col items-center justify-center bg-blue-500 text-white font-inter p-4">
      <h1 class="text-5xl font-bold mb-4">Welcome to the Dashboard!</h1>
      <p class="text-xl text-center mb-8">You have successfully logged in.</p>
      <button
        @click="handleLogout"
        class="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const handleLogout = () => {
    // In a real app, you'd invalidate the user's session/token on the backend
    console.log('Logging out...');
    router.push('/'); // Redirect back to the login page
  };
  </script>
  
  <style scoped>
  /* No specific custom styles needed here as we are using Tailwind classes */
  </style>