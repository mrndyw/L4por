<template>
    <div class="h-screen flex flex-col">
      <NavbarHome />
      <div class="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-4xl font-bold mb-4">Selamat Datang di Laporan Kita</h1>
          <p class="text-lg mb-6">Platform pelaporan kejadian yang cepat, aman, dan terpercaya.</p>
          <router-link
            to="/login"
            class="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Masuk Sekarang
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarHome from "../components/NavbarHome.vue";
  
  export default {
    name: "LandingPage",
    components: {
      NavbarHome,
    },
  };
  </script>
  