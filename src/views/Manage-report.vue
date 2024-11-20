<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar Component -->
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Navbar Component -->
      <Navbar />

      <!-- Main Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="container mx-auto px-6 py-8">
          <!-- Search and Filter Section -->
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-semibold">Kelola Laporan</h1>

            <div class="flex relative space-x-4">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  class="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                  placeholder="Cari pelapor, laporan"
                />
                <i class="fas fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>

              <!-- Custom Select Dropdown for Status -->
              <div class="relative">
                <select
                  v-model="selectedStatus"
                  class="block appearance-none w-full py-3 px-4 pr-8 rounded-md border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Semua Status</option>
                  <option value="Menunggu">Menunggu</option>
                  <option value="Diterima">Diterima</option>
                  <option value="Ditolak">Ditolak</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Report Table Section -->
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
                  v-for="report in filteredReports"
                  :key="report.id"
                  @click="openReportDetail(report)"
                  class="cursor-pointer hover:bg-gray-50"
                >
                  <td class="px-6 py-4 whitespace-nowrap text-left">{{ report.id }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-left">{{ report.pelapor }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-left">{{ report.laporan }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-left">{{ report.lokasi }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-left">
                    <span :class="statusClasses(report.status)">
                      {{ report.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <!-- Report Detail Popup -->
      <ReportDetailPopup
        v-if="selectedReport"
        :is-open="isDetailPopupOpen"
        :report="{
          title: selectedReport?.laporan,
          location: selectedReport?.lokasi,
          dateTime: '2024-11-14 10:30',
          description: 'Terlihat 5 siswa berseragam SMK 4 sedang nongkrong di warung',
          status: selectedReport?.status,
          imageUrl: '/api/placeholder/800/600',
        }"
        @close="closeReportDetail"
        @save="handleSaveReport"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import ReportDetailPopup from "../components/Detail-Laporan.vue";

export default {
  name: "ManageReport",
  components: {
    Navbar,
    Sidebar,
    ReportDetailPopup,
  },
  setup() {
    const searchQuery = ref("");
    const selectedStatus = ref(""); // Dropdown selection for status
    const isDetailPopupOpen = ref(false);
    const selectedReport = ref(null);

    const reports = ref([
      {
        id: 1,
        pelapor: "Ahmad Kusen",
        laporan: "Merokok",
        lokasi: "JL. Buah Batu",
        tanggalKejadian: "2024-11-01",
        status: "Menunggu",
      },
      {
        id: 2,
        pelapor: "Rani Indah",
        laporan: "Bolos sekolah",
        lokasi: "JL. Merdeka",
        tanggalKejadian: "2024-11-02",
        status: "Diterima",
      },
      {
        id: 3,
        pelapor: "Budi Setiawan",
        laporan: "Bolos sekolah",
        lokasi: "JL. Jakarta",
        tanggalKejadian: "2024-11-03",
        status: "Menunggu",
      },
      {
        id: 4,
        pelapor: "Siti Nurhaliza",
        laporan: "Berkendara ugal-ugalan",
        lokasi: "JL. Raya",
        tanggalKejadian: "2024-11-04",
        status: "Ditolak",
      },
      {
        id: 5,
        pelapor: "Joko Prasetyo",
        laporan: "Merokok",
        lokasi: "Kantin Sekolah",
        tanggalKejadian: "2024-11-05",
        status: "Diterima",
      },
    ]);

    const filteredReports = computed(() => {
      return reports.value.filter((report) => {
        const matchesSearch =
          report.pelapor.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          report.laporan.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesStatus = selectedStatus.value
          ? report.status === selectedStatus.value
          : true;

        return matchesSearch && matchesStatus;
      });
    });

    const openReportDetail = (report) => {
      selectedReport.value = report;
      isDetailPopupOpen.value = true;
    };

    const closeReportDetail = () => {
      isDetailPopupOpen.value = false;
      selectedReport.value = null;
    };

    const handleSaveReport = (updatedReport) => {
      const reportIndex = reports.value.findIndex(
        (r) => r.id === selectedReport.value.id
      );
      if (reportIndex !== -1) {
        reports.value[reportIndex].status = updatedReport.status;
      }
      closeReportDetail();
    };

    const statusClasses = (status) => {
      switch (status.toLowerCase()) {
        case "menunggu":
          return "px-2 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800";
        case "diterima":
          return "px-2 py-1 text-sm rounded-full bg-green-100 text-green-800";
        case "ditolak":
          return "px-2 py-1 text-sm rounded-full bg-red-100 text-red-800";
        default:
          return "";
      }
    };

    return {
      searchQuery,
      selectedStatus,
      reports,
      isDetailPopupOpen,
      selectedReport,
      openReportDetail,
      closeReportDetail,
      handleSaveReport,
      filteredReports,
      statusClasses,
    };
  },
};
</script>
