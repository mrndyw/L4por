<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <Sidebar/>
    
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col">
        <!-- Navbar -->
        <Navbar />
    
        <!-- Form Content -->
        <div class="flex-1 p-8 bg-gray-100">
            <div class="flex justify-between items-center mb-8">
            <h1 class="text-2xl font-semibold">Buat Laporan Baru</h1>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Judul Pelanggaran -->
              <div>
                <label class="block text-sm text-left text-gray-600 mb-2">Judul Pelanggaran</label>
                <input 
                  v-model="formData.judul"
                  type="text"
                  class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
              </div>
  
              <!-- Lokasi dan Tanggal -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-left text-gray-600 mb-2">Lokasi Kejadian</label>
                  <input 
                    v-model="formData.lokasi"
                    type="text"
                    class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                </div>
                <div>
                  <label class="block text-sm text-left text-gray-600 mb-2">Tanggal & Waktu</label>
                  <input 
                    v-model="formData.tanggal"
                    type="datetime-local"
                    class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                </div>
              </div>
  
              <!-- Deskripsi -->
              <div>
                <label class="block text-sm text-left text-gray-600 mb-2">Deskripsi</label>
                <textarea 
                  v-model="formData.deskripsi"
                  rows="4"
                  class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
  
              <!-- Upload File -->
              <div>
                <label class="block text-sm text-left text-gray-600 mb-2">Bukti (Foto/Video)</label>
                <div 
                  class="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-blue-500"
                  @click="triggerFileInput"
                  @dragover.prevent
                  @drop.prevent="handleFileDrop"
                >
                  <input 
                    type="file"
                    ref="fileInput"
                    class="hidden"
                    @change="handleFileSelect"
                    accept=".png,.jpg,.jpeg,.mp4"
                  >
                  <p v-if="!previewUrl" class="text-sm text-blue-500">Upload file atau drag and drop</p>
                  <p v-if="!previewUrl" class="text-xs text-gray-500 mt-1">PNG, JPG, Video sampai 10MB</p>
                  
                  <!-- Pratinjau Gambar atau Video -->
                  <div v-if="previewUrl" class="mt-4">
                    <img v-if="isImage" :src="previewUrl" class="max-w-full max-h-48 mx-auto" alt="Preview Image">
                    <video v-if="isVideo" :src="previewUrl" class="max-w-full max-h-48 mx-auto" controls></video>
                  </div>
                </div>
              </div>
  
              <!-- Submit Button -->
              <button 
                type="submit"
                class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Kirim Laporan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue'
  import Navbar from '../components/Navbar.vue'
  
  export default {
    name: 'BuatLaporan',
    components: {
      Sidebar,
      Navbar
    },
    data() {
      return {
        formData: {
          judul: '',
          lokasi: '',
          tanggal: '',
          deskripsi: '',
          bukti: null
        },
        previewUrl: null, // URL untuk pratinjau
        isImage: false,   // Status apakah file adalah gambar
        isVideo: false    // Status apakah file adalah video
      }
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click()
      },
      handleFileSelect(event) {
        const file = event.target.files[0]
        this.processFile(file)
      },
      handleFileDrop(event) {
        const file = event.dataTransfer.files[0]
        this.processFile(file)
      },
      processFile(file) {
        if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
          this.formData.bukti = file
          this.previewUrl = URL.createObjectURL(file)
          this.isImage = file.type.startsWith('image/')
          this.isVideo = file.type.startsWith('video/')
        } else {
          alert('File terlalu besar. Maksimal 10MB')
          this.clearPreview()
        }
      },
      clearPreview() {
        this.previewUrl = null
        this.isImage = false
        this.isVideo = false
      },
      submitForm() {
        // Implementasi pengiriman form ke backend
        console.log('Form submitted:', this.formData)
        if (this.previewUrl) {
          URL.revokeObjectURL(this.previewUrl) // Membersihkan URL sementara
        }
      }
    }
  }
  </script>
  