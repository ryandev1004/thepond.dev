<script setup lang="ts">
import Introduction from '@/components/Introduction.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue';
import TechStack from '@/components/TechStack.vue';
</script>

<template>
    <div
      class="mx-auto max-w-6xl space-y-32 px-0 py-8 md:space-y-24 md:px-4 md:py-8"
    >
      <Introduction></Introduction>
      <TechStack></TechStack>
      <Projects></Projects>
      <Experience></Experience>
    </div>
</template>
