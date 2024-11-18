<template>
    <div class="flex">
      <Sidebar />
  
      <Navbar />
    </div>
  </template>
  
  <script>
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
  