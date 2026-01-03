<script setup lang="ts">
import Card from 'primevue/card'

interface Tech {
  icon: string
  title: string
  description: string
}

const techs = defineProps<Tech>()
</script>

<template>
    <Card class="h-26 w-80">
      <template #content>
        <div class="flex h-full items-start gap-4">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center"
          >
            <img class="object-contain p-2" :src="techs.icon" />
          </div>
          <div class="flex flex-col select-none text-white">
            <h3 class="text-sm font-bold">{{ techs.title }}</h3>
            <p class="text-sm italic">{{ techs.description }}</p>
          </div>
        </div>
      </template>
    </Card>
</template>

<style scoped>
  :deep(.p-card) {
    border: none !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  :deep(.p-card:hover) {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15) !important;
  }
</style>
