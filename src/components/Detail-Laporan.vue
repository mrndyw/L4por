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
          <h2 class="text-2xl font-bold mb-6">Detail Laporan</h2>
          
          <!-- Judul Laporan -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">{{ report.title }}</h3>
            <div class="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <span>{{ report.location }}</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600 text-sm">
              <span>{{ report.dateTime }}</span>
            </div>
          </div>

          <!-- Status Badge -->
          <div class="mb-6">
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

          <!-- Description -->
          <p class="text-gray-700 mb-6">{{ report.description }}</p>

          <!-- Image -->
          <div class="mb-6">
            <img 
              :src="report.imageUrl" 
              :alt="report.title"
              class="w-full rounded-lg object-cover"
              style="max-height: 400px"
            />
          </div>

          <!-- Status Selection -->
          <div class="mb-6">
            <h4 class="font-semibold mb-2">Status</h4>
            <div class="flex flex-col gap-2">
              <label class="inline-flex items-center">
                <input 
                  type="radio" 
                  v-model="selectedStatus" 
                  value="Menunggu"
                  class="form-radio text-blue-600"
                />
                <span class="ml-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Menunggu
                  </span>
                </span>
              </label>
              <label class="inline-flex items-center">
                <input 
                  type="radio" 
                  v-model="selectedStatus" 
                  value="Diterima"
                  class="form-radio text-blue-600"
                />
                <span class="ml-2">
                  <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Diterima
                  </span>
                </span>
              </label>
              <label class="inline-flex items-center">
                <input 
                  type="radio" 
                  v-model="selectedStatus" 
                  value="Ditolak"
                  class="form-radio text-blue-600"
                />
                <span class="ml-2">
                  <span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    Ditolak
                  </span>
                </span>
              </label>
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
      closePopup,
      saveReport
    }
  }
}
</script>