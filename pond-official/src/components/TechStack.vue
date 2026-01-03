<script setup lang="ts">
import { ref } from 'vue'
import TechCard from '@/components/common/TechCard.vue'

interface Tech {
  icon: string
  title: string
  description: string
}

const techs = ref<Tech[]>([
  {
    icon: 'src/assets/icons/springbooticon.svg',
    title: 'SpringBoot',
    description: 'Backend framework based in Java',
  },
  {
    icon: 'src/assets/icons/vue.svg',
    title: 'Vue',
    description: 'Frontend framework based in JS/TS',
  },
  {
    icon: 'src/assets/icons/postgresql.svg',
    title: 'PostgreSQL',
    description: 'Relational Database',
  },
  {
    icon: 'src/assets/icons/php.svg',
    title: 'PHP',
    description: 'Server side scripting language',
  },
  {
    icon: 'src/assets/icons/react.svg',
    title: 'React',
    description: 'JavaScript Library',
  },
  {
    icon: 'src/assets/icons/mysql.svg',
    title: 'MySQL DB',
    description: 'Relational Database',
  },
])
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
      <div
        class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
      >
        <TechCard
          v-for="tech in techs"
          :key="tech.title"
          :icon="tech.icon"
          :title="tech.title"
          :description="tech.description"
        />
      </div>
    </div>
  </section>
</template>
