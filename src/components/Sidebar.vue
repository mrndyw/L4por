<template>
    <aside class="bg-[#1B6CB8] h-screen w-56 font-montserrat">
      <div class="flex items-center justify-center py-4 flex-col">
        <img
          src="../assets/smkn4-bandung-logo.png"
          alt="SMKN 4 Bandung"
          class="w-1/3 sm:w-20"
        />
        <span class="text-white mt-2 text-xl">L4por</span>
      </div>
      <ul class="space-y-2">
        <li>
          <a href="/dashboard" class="flex items-center px-4 py-2 text-white hover:bg-blue-600">
            <i class="fas fa-home mr-2"></i> <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/manage-report" class="flex items-center px-4 py-2 text-white hover:bg-blue-600">
            <i class="fas fa-chart-bar mr-2"></i> <span>Kelola Laporan</span>
          </a>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  