<!-- Layout.vue -->
<template>
    <div class="flex">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Navbar -->
      <Navbar />
    </div>
  </template>
  
  <script>
  // Import the Sidebar and Navbar components
  import Sidebar from '../components/Sidebar.vuevue'
  import Navbar from '../components/Navbar.vue'
  
  export default {
    name: 'Layout',
    components: {
      Sidebar,
      Navbar
    }
  }
  </script>
  