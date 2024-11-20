<template>
  <div class="flex h-screen">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar />

      <div class="flex-1 p-8 bg-gray-100">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-2xl font-semibold">Laporan Masuk</h1>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-500 text-left">Total Laporan</p>
            <h3 class="text-3xl text-left font-semibold">150</h3>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-500 text-left">Menunggu</p>
            <h3 class="text-3xl text-left font-semibold">100</h3>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-500 text-left">Diterima</p>
            <h3 class="text-3xl text-left font-semibold">30</h3>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-500 text-left">Ditolak</p>
            <h3 class="text-3xl text-left font-semibold">20</h3>
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
                class="hover:bg-gray-50"
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
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Navbar,
  },
  setup() {
    const reports = [
      {
        id: 1,
        pelapor: "Ahmad Kusen",
        laporan: "Merokok",
        lokasi: "JL. Buah Batu",
        status: "Menunggu",
      },
      {
        id: 2,
        pelapor: "Rani Indah",
        laporan: "Bolos sekolah",
        lokasi: "JL. Merdeka",
        status: "Diterima",
      },
      {
        id: 3,
        pelapor: "Budi Setiawan",
        laporan: "Bolos sekolah",
        lokasi: "JL. Jakarta",
        status: "Menunggu",
      },
      {
        id: 4,
        pelapor: "Siti Nurhaliza",
        laporan: "Berkendara ugal-ugalan",
        lokasi: "JL. Raya",
        status: "Ditolak",
      },
      {
        id: 5,
        pelapor: "Joko Prasetyo",
        laporan: "Merokok",
        lokasi: "Kantin Sekolah",
        status: "Diterima",
      },
    ];

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
      reports,
      statusClasses,
    };
  },
};
</script>
