<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'

interface Project {
  title: string
  stack?: string
  description: string
  img?: string
  link: string
}

const projects = defineProps<Project>()
</script>

<template>
  <div class="select-none">
    <Card class="flex size-full flex-col" style="overflow: hidden">
      <template #header>
        <div v-if="projects.img" class="h-48 w-full shrink-0 overflow-hidden">
          <img
            alt="project header"
            :src="projects.img"
            class="h-full w-full object-cover"
          />
        </div>
      </template>
      <template #title>
        <div class="text-white">{{ projects.title }}</div>
      </template>
      <template #subtitle>
        <div class="text-white h-">{{ projects.stack }}</div>
      </template>
      <template #content>
        <p class="m-0 text-white">
          {{ projects.description }}
        </p>
      </template>
      <template #footer>
        <div class="mt-1 flex gap-4">
          <Button class="w-full" :href="projects.link" target="_blank" as="a">
            <i class="pi pi-link"></i>
          </Button>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
:deep(.p-card) {
  border: none !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

:deep(.p-card-body) {
  display: flex;
  flex-direction: column;
  flex: 1;
}

:deep(.p-card-content) {
  flex: 1;
}

:deep(.p-card-footer) {
  margin-top: auto;
}

:deep(.p-card:hover) {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15) !important;
}

:deep(.p-button) {
  background-color: oklch(95.4% 0.038 75.164);
  color: black;
  border: none !important;
}

:deep(.p-button:hover) {
  background-color: oklch(90.1% 0.076 70.697);
}
</style>
