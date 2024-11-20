<template>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-1">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold text-blue-600">
              L4por
            </router-link>
          </div>
          <div>
            <router-link
              to="/login"
              class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarHome",
  };
  </script>

  