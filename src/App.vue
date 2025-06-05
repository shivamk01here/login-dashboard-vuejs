<template>
  <!-- 
    The <router-view> component is where the matched component for the current route
    will be rendered. For example, if the path is '/', LoginPage will be shown here.
  -->
  <router-view></router-view>
</template>

<script setup>
// App.vue is the main entry component for our Vue application.
// It acts as a container for all other components.
// With <router-view>, it will display the component mapped to the current URL.
// No specific script logic is needed here for this simple setup.
</script>

<style>
/* This style block is global. We'll use it to set up Tailwind CSS.
  The @tailwind directives inject Tailwind's base styles, components, and utilities.
  We also set a default font for the entire application.
*/
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  /* Apply the Inter font to the entire body */
  font-family: 'Inter', sans-serif; 
}
</style>