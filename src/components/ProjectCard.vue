<template>
  <div class="max-w-full p-4 overflow-hidden bg-white border-4 border-gray-200 rounded-lg">
    <div class="overflow-hidden">
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="block text-xl font-semibold text-gray-700 truncate"
        :data-umami-event="'project-click:'+project.name"
      >
        <span class="text-sm font-normal text-gray-500">#{{ idx + 1 }}</span>
        {{ project.name }}
      </a>
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="block text-sm text-gray-600 truncate hover:underline"
        :data-umami-event="'project-click:'+project.name"
        >{{ project.link }}</a
      >
    </div>
    <a
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
      :data-umami-event="'project-click:'+project.name"
    >
      <div
        class="flex items-center justify-center h-24 mt-4 rounded"
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
</template>

<script setup>
const props = defineProps({
  project: Object,
  idx: Number,
});
</script>
