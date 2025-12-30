<script setup lang="ts">
import SkillCardDisplay from '@/components/common/SkillCardDisplay.vue'
</script>

<template>
    <section class="flex items-center px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="flex flex-col gap-8 pt-2"
      >
        <div class="flex items-center gap-2">
          <i class="pi pi-microchip text-3xl text-white"></i>
          <span class="text-3xl font-bold text-white">Primary Tech Stack</span>
        </div>
        <SkillCardDisplay />
      </div>
    </section>
</template>