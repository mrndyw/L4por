<template>
    <div
      class="flex flex-col min-h-screen p-4 items-center justify-center bg-gradient-to-r from-[#335061] to-[#4480A2]"
    >
      <div class="flex justify-center mb-2">
        <img
          src="../assets/smkn4-bandung-logo.png"
          alt="SMKN 4 Bandung"
          class="w-1/3 sm:w-20"
        />
      </div>
      <div class="flex justify-center mb-4">
        <p class="text-white text-3xl sm:text-4xl font-light font-montserrat">
          L4por
        </p>
      </div>
      <div
        class="bg-white rounded-lg shadow-md p-4 w-[22rem] max-w-md sm:p-6 sm:mb-6"
      >
        <div class="text-center mb-4">
          <h1 class="text-2xl sm:text-xl font-bold">Register</h1>
        </div>
        <form @submit.prevent="handleRegister">
          <div class="mb-2 relative">
            <label
              for="username"
              class="block text-gray-700 font-md mb-1 text-left text-sm sm:text-base"
              >Username</label
            >
            <input
              v-model="username"
              id="username"
              type="text"
              class="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
              placeholder="Username"
            />
            <i
              class="fas fa-user absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500"
            ></i>
          </div>
  
          <div class="mb-2 relative">
            <label
              for="email"
              class="block text-gray-700 font-md mb-1 text-left text-sm sm:text-base"
              >Email</label
            >
            <input
              v-model="email"
              id="email"
              type="email"
              class="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
              placeholder="Email"
            />
            <i
              class="fas fa-envelope absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500"
            ></i>
          </div>
  
          <div class="mb-4 relative">
            <label
              for="password"
              class="block text-gray-700 font-md mb-1 text-left text-sm sm:text-base"
              >Password</label
            >
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              id="password"
              class="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
              placeholder="Password"
            />
            <i
              class="fas fa-lock absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500"
            ></i>
            <i
              @click="togglePassword"
              :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
              class="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            ></i>
          </div>
  
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
  
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            Already have an account? 
            <router-link
              to="/login"
              class="text-blue-500 hover:text-blue-700 font-md"
            >
              Login
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        email: "",
        password: "",
        showPassword: false,
      };
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword;
      },
      handleRegister() {
        console.log({
          username: this.username,
          email: this.email,
          password: this.password,
        });
      },
    },
  };
  </script>  