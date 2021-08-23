<template class="min-h-screen">
  <!-- Header -->
  <github-icon class="absolute top-4 right-4" />

  <!-- Heading -->
  <h1 class="mt-20 text-4xl font-bold text-center text-gray-600">
    Handshake Tools
  </h1>
  <h2 class="mt-4 text-xl text-center text-gray-600">All things Handshake.</h2>
  <section class="px-4 mt-12">
    <div
      class="grid max-w-screen-lg gap-4 mx-auto bg-blu-50 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <!-- Project Cards -->
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="p-4 bg-white border-4 border-gray-200 rounded-lg"
      >
        <div class="overflow-hidden">
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block text-xl font-semibold text-gray-700 truncate"
          >
            <span class="text-sm font-normal text-gray-500"
              >#{{ idx + 1 }}</span
            >
            {{ project.name }}
          </a>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block text-sm text-gray-600 truncate hover:underline"
            >{{ project.link }}</a
          >
        </div>
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
          <div
            class="flex items-center justify-center h-32 mt-4 rounded"
            :class="project.colors"
          >
            <font-awesome-icon
              v-for="icon in project.icons"
              :key="icon"
              :icon="['fas', icon]"
              size="lg"
              class="mx-4 text-white"
            />
          </div>
        </a>
        <p class="mt-4 text-gray-700">
          {{ project.description }}
        </p>
      </div>
      <!-- Next Up -->
      <div
        class="p-4 bg-white border-4 border-gray-200 border-dashed rounded-lg opacity-70"
      >
        <div>
          <h3 class="text-xl font-semibold text-gray-600">
            <span class="text-sm font-normal text-gray-500"
              >#{{ projects.length + 1 }}</span
            >
            Next Up...
          </h3>
          <a
            href="https://t.me/rithvikvibhu"
            class="inline-block text-sm text-gray-600"
            >what would you link to see?</a
          >
        </div>
        <div
          class="flex items-center justify-center h-32 mt-4 text-5xl font-black text-gray-500 rounded bg-gradient-to-r from-[#f3f4f6] to-[#d1d5db]"
        >
          ?
        </div>
        <p class="mt-4 text-gray-700">
          New projects every other week. Check back in a few days to find out
          what’s next!
        </p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <div class="absolute bottom-0 w-full py-2 text-center bg-gray-100">
    <p class="text-sm text-gray-600">
      made with ♥️ by
      <a href="https://blek.ga" class="hover:underline">Rithvik Vibhu</a>
    </p>
  </div>
</template>

<script setup>
import GithubIcon from "./components/GithubIcon.vue";

const projects = [
  {
    name: "Handshake Login",
    description:
      "A library for authentication with Handshake names, for use by validating servers (websites) and identity managers.",
    link: "https://github.com/rithvikvibhu/handshake-login",
    icons: ["key", "lock", "check-circle"],
    colors: "bg-gradient-to-r from-[#06BEB6] to-[#48B1BF]",
  },
  {
    name: "Identity Manager",
    description:
      "An Identity Manager that uses Handshake Login and works with all supported strategies.",
    link: "https://github.com/rithvikvibhu/htools-id-manager",
    icons: ["user", "fingerprint", "id-card"],
    colors: "bg-gradient-to-r from-purple-900 to-indigo-500",
  },
];
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
// import { defineProps, reactive } from 'vue'
// defineProps({
//   msg: String
// })
// const state = reactive({ count: 0 })
</script>

<style></style>
