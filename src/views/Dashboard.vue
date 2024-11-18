<template>
    <div class="flex h-screen">
      <Sidebar/>
    
      <div class="flex-1 flex flex-col">
        <Navbar />
    
        <div class="flex-1 p-8 bg-gray-100">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-2xl font-semibold">Laporan Masuk</h1>
          </div>
  
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-semibold">150</h3>
              <p class="text-gray-500">Total Laporan</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-semibold">100</h3>
              <p class="text-gray-500">Menunggu</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-semibold">30</h3>
              <p class="text-gray-500">Diterima</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-semibold">20</h3>
              <p class="text-gray-500">Ditolak</p>
            </div>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <table class="min-w-full border-collapse">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Id</th>
                  <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Pelapor</th>
                  <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Laporan</th>
                  <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Tanggal Kejadian</th>
                  <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="report in reports" :key="report.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-left text-sm text-gray-900">{{ report.id }}</td>
                  <td class="px-6 py-4 text-left text-sm text-gray-900">{{ report.pelapor }}</td>
                  <td class="px-6 py-4 text-left text-sm text-gray-900">{{ report.laporan }}</td>
                  <td class="px-6 py-4 text-left text-sm text-gray-900">{{ report.tanggalKejadian }}</td>
                  <td class="px-6 py-4 text-left text-sm">
                    <span :class="['px-2 py-1 rounded-full text-white', statusClasses(report.status)]">{{ report.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue'
  import Navbar from '../components/Navbar.vue'
  
  export default {
    name: 'Dashboard',
    components: {
      Sidebar,
      Navbar
    },
    data() {
      return {
        reports: [
          { id: 1, pelapor: 'Ahmad Kusen', laporan: 'Kerokol', tanggalKejadian: 'JL. Buah batu', status: 'Menunggu' },
          { id: 2, pelapor: 'Ahmad Kusen', laporan: 'Kerokol', tanggalKejadian: 'JL. Buah batu', status: 'Selesai' },
          { id: 3, pelapor: 'Ahmad Kusen', laporan: 'Kerokol', tanggalKejadian: 'JL. Buah batu', status: 'Menunggu' },
          { id: 4, pelapor: 'Ahmad Kusen', laporan: 'Kerokol', tanggalKejadian: 'JL. Buah batu', status: 'Ditolak' },
          { id: 5, pelapor: 'Ahmad Kusen', laporan: 'Kerokol', tanggalKejadian: 'JL. Buah batu', status: 'Selesai' }
        ]
      }
    },
    methods: {
      statusClasses(status) {
        switch (status.toLowerCase()) {
          case 'menunggu':
            return 'bg-yellow-400';
          case 'selesai':
            return 'bg-green-400';
          case 'ditolak':
            return 'bg-red-500';
          default:
            return '';
        }
      }
    }
  }
  </script>
  