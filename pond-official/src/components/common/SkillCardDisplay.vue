<script setup lang="ts">
import Card from 'primevue/card'
import springbootIcon from '@/assets/icons/springbooticon.svg'
import php from '@/assets/icons/php.svg'
import vue from '@/assets/icons/vue.svg'
import postgresql from '@/assets/icons/postgresql.svg'
import react from '@/assets/icons/react.svg'
import mysql from '@/assets/icons/mysql.svg'

const skills = [
  {
    icon: springbootIcon,
    title: 'SpringBoot',
    description: 'Backend framework based in Java',
  },
  { icon: vue, title: 'Vue', description: 'Frontend framework based in JS/TS' },
  { icon: postgresql, title: 'PostgreSQL', description: 'Relational Database' },
  { icon: php, title: 'PHP', description: 'Server side scripting language' },
  { icon: react, title: 'React', description: 'JavaScript Library' },
  { icon: mysql, title: 'MySQL DB', description: 'Relational Database' },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
    <Card v-for="skill in skills" :key="skill.title" class="h-26 w-80">
      <template #content>
        <div class="flex h-full items-start gap-4">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center"
          >
            <img class="object-contain p-2" :src="skill.icon" />
          </div>
          <div class="flex flex-col select-none text-white">
            <h3 class="text-sm font-bold">{{ skill.title }}</h3>
            <p class="text-sm italic">{{ skill.description }}</p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
  :deep(.p-card) {
    background-color: var(--p-neutral-700);
    border: none !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  :deep(.p-card:hover) {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15) !important;
  }
</style>
