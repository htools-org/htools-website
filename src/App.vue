<template>
  <div class="flex flex-col h-full">
    <div class="flex-grow">
      <!-- Header -->
      <github-icon class="absolute top-4 right-4" />

      <!-- Heading -->
      <h1 class="mt-20 text-4xl font-bold text-center text-gray-600">
        Handshake Tools
      </h1>
      <h2 class="mt-4 text-xl text-center text-gray-600">
        All things Handshake.
      </h2>
      <section class="px-4 mt-12">
        <div
          class="grid max-w-screen-lg gap-4 mx-auto sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <!-- Project Cards -->
          <ProjectCard
            v-for="(project, idx) in projects"
            :key="idx"
            :project="project"
            :idx="idx"
          />

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
                class="inline-block text-sm text-gray-600 hover:underline"
                >what would you link to see?</a
              >
            </div>
            <div
              class="flex items-center justify-center h-24 mt-4 text-5xl font-black text-gray-500 rounded bg-gradient-to-r from-[#f3f4f6] to-[#d1d5db]"
            >
              ?
            </div>
            <p class="mt-4 text-gray-700">
              New projects every other week. Check back in a few days to find
              out what’s next!
            </p>
          </div>
        </div>
      </section>
    </div>

    <br /><br />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import GithubIcon from "./components/GithubIcon.vue";
import ProjectCard from "./components/ProjectCard.vue";

import projects from "./assets/projects";
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
// import { defineProps, reactive } from 'vue'
// defineProps({
//   msg: String
// })
// const state = reactive({ count: 0 })
</script>

<style></style>
