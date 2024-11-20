<!-- ReportDetailPopup.vue -->
<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50" @click="closePopup"></div>
    
    <!-- Popup Content -->
    <div class="relative min-h-screen flex items-center justify-center p-4">
      <div class="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto">
        <!-- Popup Body -->
        <div class="p-6">
          <h2 class="text-3xl text-left font-bold mb-6">Detail Laporan</h2>
          
          <!-- Judul Laporan dan Status -->
          <div class="flex justify-between mb-6">
            <div>
              <h3 class="text-xl text-left font-semibold mb-2">{{ report.title }}</h3>
              <div class="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <span>{{ report.location }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600 text-sm">
                <span>{{ report.dateTime }}</span>
              </div>
            </div>
            <!-- Status Badge -->
            <div class="flex items-center">
              <span 
                class="px-3 py-1 rounded-full text-sm font-medium"
                :class="{
                  'bg-yellow-100 text-yellow-800': report.status === 'Menunggu',
                  'bg-green-100 text-green-800': report.status === 'Diterima',
                  'bg-red-100 text-red-800': report.status === 'Ditolak'
                }"
              >
                {{ report.status }}
              </span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-700 text-left mb-6">{{ report.description }}</p>

          <!-- Image -->
          <div class="mb-6">
            <img 
              :src="report.imageUrl" 
              :alt="report.title"
              class="w-full rounded-lg object-cover"
              style="max-height: 400px"
            />
          </div>

          <!-- Status Dropdown with custom <span> options -->
          <div class="mb-6">
            <h4 class="font-semibold text-left mb-2">Status</h4>
            <div class="relative">
              <div @click="toggleDropdown" class="cursor-pointer p-2 border rounded-md flex items-center text-blue-600 w-48">
                <span :class="{
                    'bg-yellow-100 text-yellow-800': selectedStatus === 'Menunggu',
                    'bg-green-100 text-green-800': selectedStatus === 'Diterima',
                    'bg-red-100 text-red-800': selectedStatus === 'Ditolak'
                }" class="inline-block px-2 py-1 rounded-full text-sm">
                  {{ selectedStatus }}
                </span>
              </div>
              <!-- Dropdown options -->
              <div v-if="dropdownOpen" class="absolute left-0 right-0 bg-white border rounded-md shadow-lg mt-2 w-48">
                <div 
                  v-for="status in statuses" 
                  :key="status" 
                  @click="selectStatus(status)" 
                  class="px-4 py-2 cursor-pointer text-left hover:bg-gray-200"
                >
                  <span 
                    :class="{
                      'bg-yellow-100 text-yellow-800': status === 'Menunggu',
                      'bg-green-100 text-green-800': status === 'Diterima',
                      'bg-red-100 text-red-800': status === 'Ditolak'
                    }"
                    class="inline-block px-2 py-1 rounded-full text-sm"
                  >
                    {{ status }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button
              @click="saveReport"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ReportDetailPopup',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    report: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        title: 'Bolos Sekolah',
        location: 'Jl. Terusan Jakarta No.23',
        dateTime: '2024-11-14 10:30',
        description: 'Terlihat 5 siswa berseragam SMK 4 sedang nongkrong di warung',
        status: 'Menunggu',
        imageUrl: '/path/to/image.jpg'
      })
    }
  },
  emits: ['close', 'save'],
  setup(props, { emit }) {
    const selectedStatus = ref(props.report.status)
    const dropdownOpen = ref(false)
    const statuses = ['Menunggu', 'Diterima', 'Ditolak']

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value
    }

    const selectStatus = (status) => {
      selectedStatus.value = status
      dropdownOpen.value = false
    }

    const closePopup = () => {
      emit('close')
    }

    const saveReport = () => {
      emit('save', {
        ...props.report,
        status: selectedStatus.value
      })
      closePopup()
    }

    return {
      selectedStatus,
      dropdownOpen,
      statuses,
      toggleDropdown,
      selectStatus,
      closePopup,
      saveReport
    }
  }
}
</script>
