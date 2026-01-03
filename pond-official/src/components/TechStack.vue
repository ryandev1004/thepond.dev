<script setup lang="ts">
import { ref } from 'vue'
import TechCard from '@/components/common/TechCard.vue'
import springbootIcon from '@/assets/icons/springbooticon.svg'
import vueIcon from '@/assets/icons/vue.svg'
import postgresqlIcon from '@/assets/icons/postgresql.svg'
import phpIcon from '@/assets/icons/php.svg'
import reactIcon from '@/assets/icons/react.svg'
import mysqlIcon from '@/assets/icons/mysql.svg'

interface Tech {
  icon: string
  title: string
  description: string
}

const techs = ref<Tech[]>([
  {
    icon: springbootIcon,
    title: 'SpringBoot',
    description: 'Backend framework based in Java',
  },
  {
    icon: vueIcon,
    title: 'Vue',
    description: 'Frontend framework based in JS/TS',
  },
  {
    icon: postgresqlIcon,
    title: 'PostgreSQL',
    description: 'Relational Database',
  },
  {
    icon: phpIcon,
    title: 'PHP',
    description: 'Server side scripting language',
  },
  {
    icon: reactIcon,
    title: 'React',
    description: 'JavaScript Library',
  },
  {
    icon: mysqlIcon,
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
