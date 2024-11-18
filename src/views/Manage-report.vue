<template>
    <div class="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div class="flex-1 flex flex-col overflow-hidden">
        <Navbar />
  
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div class="container mx-auto px-6 py-8">
            <div class="flex justify-between items-center mb-6">
              <h1 class="text-2xl font-semibold">Kelola Laporan</h1>
              
              <div class="flex relative space-x-4">
                <div class="relative">
                  <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Cari pelapor, Laporan"
                    class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <i class="fas fa-magnifying-glass"></i>
                </div>
  
                <button class="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center">
                  Filter
                  <span class="ml-2">▼</span>
                </button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelapor</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Laporan</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr 
                    v-for="report in reports" 
                    :key="report.id"
                    @click="openReportDetail(report)"
                    class="cursor-pointer hover:bg-gray-50"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">{{ report.id }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ report.pelapor }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ report.laporan }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ report.lokasi }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span 
                        :class="{
                          'px-2 py-1 text-sm rounded-full': true,
                          'bg-yellow-100 text-yellow-800': report.status === 'Menunggu',
                          'bg-green-100 text-green-800': report.status === 'Diterima',
                          'bg-red-100 text-red-800': report.status === 'Ditolak'
                        }"
                      >
                        {{ report.status }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
  
        <ReportDetailPopup
          v-if="selectedReport"
          :is-open="isDetailPopupOpen"
          :report="{
            title: selectedReport?.laporan,
            location: selectedReport?.lokasi,
            dateTime: '2024-11-14 10:30',
            description: 'Terlihat 5 siswa berseragam SMK 4 sedang nongkrong di warung',
            status: selectedReport?.status,
            imageUrl: '/api/placeholder/800/600'
          }"
          @close="closeReportDetail"
          @save="handleSaveReport"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import Navbar from '@/components/Navbar.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import ReportDetailPopup from '../components/Detail-Laporan.vue'
  
  export default {
    name: 'ManageReport',
    components: {
      Navbar,
      Sidebar,
      ReportDetailPopup
    },
    setup() {
      const searchQuery = ref('')
      const isDetailPopupOpen = ref(false)
      const selectedReport = ref(null)
      
      const reports = ref([
        {
          id: 1,
          pelapor: 'Ahmad Kusen',
          laporan: 'Merokok',
          lokasi: 'JL. Buah batu',
          status: 'Menunggu'
        },
        {
          id: 2,
          pelapor: 'Ahmad Kusen',
          laporan: 'Merokok',
          lokasi: 'JL. Buah batu',
          status: 'Diterima'
        },
        {
          id: 3,
          pelapor: 'Ahmad Kusen',
          laporan: 'Merokok',
          lokasi: 'JL. Buah batu',
          status: 'Menunggu'
        },
        {
          id: 4,
          pelapor: 'Ahmad Kusen',
          laporan: 'Merokok',
          lokasi: 'JL. Buah batu',
          status: 'Ditolak'
        },
        {
          id: 5,
          pelapor: 'Ahmad Kusen',
          laporan: 'Merokok',
          lokasi: 'JL. Buah batu',
          status: 'Diterima'
        },
        {
          id: 6,
          pelapor: 'Ahmad Kusen',
          laporan: 'Merokok',
          lokasi: 'JL. Buah batu',
          status: 'Diterima'
        }
      ])
  
      const openReportDetail = (report) => {
        selectedReport.value = report
        isDetailPopupOpen.value = true
      }
  
      const closeReportDetail = () => {
        isDetailPopupOpen.value = false
        selectedReport.value = null
      }
  
      const handleSaveReport = (updatedReport) => {
        const reportIndex = reports.value.findIndex(r => r.id === selectedReport.value.id)
        if (reportIndex !== -1) {
          reports.value[reportIndex].status = updatedReport.status
        }
        closeReportDetail()
      }
  
      return {
        searchQuery,
        reports,
        isDetailPopupOpen,
        selectedReport,
        openReportDetail,
        closeReportDetail,
        handleSaveReport
      }
    }
  }
  </script>