<script setup lang="ts">
interface Tech {
  icon: string
  title: string
  description: string
}

const techs = defineProps<Tech>()
</script>

<template>
  <div
    class="flex h-28 w-full max-w-3xl items-start gap-4 rounded-2xl bg-neutral-700 p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
  >
    <img class="h-16 w-16 shrink-0 object-contain p-1" :src="techs.icon" />
    <div
      class="flex min-w-0 flex-1 flex-col justify-center gap-1 text-white select-none"
    >
      <span class="w-full text-sm font-bold">{{ techs.title }}</span>
      <span class="text-sm italic">{{ techs.description }}</span>
    </div>
  </div>
</template>
