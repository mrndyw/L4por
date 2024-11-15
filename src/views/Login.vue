<template>
  <div
    class="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-[#335061] to-[#4480A2]"
  >
    <!-- Logo SMK -->
    <div class="flex justify-center mb-4">
      <img
        src="../assets/smkn4-bandung-logo.png"
        alt="SMKN 4 Bandung"
        class="w-1/3 sm:w-20"
      />
    </div>
    <!-- Teks SMKN 4 Bandung -->
    <div class="flex justify-center mb-8">
      <p class="text-white text-3xl sm:text-4xl font-light font-montserrat">
        SMKN 4 BANDUNG
      </p>
    </div>
    <!-- Form Login -->
    <div
      class="bg-white rounded-lg shadow-md p-8 w-full max-w-md sm:p-6 sm:mb-6"
    >
      <div class="text-center mb-6">
        <h1 class="text-2xl sm:text-xl font-bold">Login to your account</h1>
      </div>
      <form @submit.prevent="handleLogin">
        <!-- Username Input -->
        <div class="mb-4 relative">
          <label
            for="username"
            class="block text-gray-700 font-semibold mb-2 text-left text-sm sm:text-base"
            >User Name</label
          >
          <input
            v-model="username"
            id="username"
            type="text"
            class="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
            placeholder="Username"
          />
          <!-- Ikon Username -->
          <i
            class="fas fa-user absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500"
          ></i>
        </div>

      <!-- Password Input -->
<div class="mb-2 relative">
  <label
    for="password"
    class="block text-gray-700 font-semibold mb-2 text-left text-sm sm:text-base"
    >Password</label
  >
  <input
    v-model="password"
    :type="showPassword ? 'text' : 'password'"
    id="password"
    class="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
    placeholder="Password"
  />
  <!-- Ikon Password -->
  <i
    class="fas fa-lock absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500"
  ></i>
  <!-- Ikon Mata (Show/Hide Password) -->
  <i
    @click="togglePassword"
    :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
    class="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
  ></i>
</div>

<!-- Forgot your password link -->
<div class="mt-1 text-right">
  <a
    href="#"
    class="inline-block text-sm font-light text-blue-500 hover:text-blue-800"
  >
    Forgot your password?
  </a>
</div>

<!-- Spacer before the login button -->
<div class="mb-6"></div>


        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false, // state untuk menentukan apakah password ditampilkan atau tidak
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword; // toggle antara true dan false untuk menampilkan/sembunyikan password
    },
    handleLogin() {
      // Logika untuk login
    },
  },
};
</script>

<!-- Tambahkan CDN Font Awesome di index.html atau dalam tag head -->
<!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"> -->
