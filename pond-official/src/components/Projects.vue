<script setup lang="ts">
import ProjectCard from '@/components/common/ProjectCard.vue';
import { ref } from 'vue';

interface Project {
  title: string;
  stack: string;
  description: string;
  img: string;
  link: string;
}

const projects = ref<Project[]>([
  {
    title: 'DocU',
    stack: 'React | Spring Boot | PostgreSQL',
    description: 'A college/highschool document formatter and generator.',
    img: '/src/assets/projects/docu.png',
    link: 'https://github.com/ryandev1004/DocU',
  },
  {
    title: 'CentralSale',
    stack: 'React | Spring Boot | PostgreSQL | Rainforest API',
    description: 'A central hub for tracking sales and inventory on Amazon',
    img: '/src/assets/projects/centralsale.png',
    link: 'https://github.com/ryandev1004/CentralSale',
  }
]);

</script>

<template>
  <section class="flex items-center px-4">
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <div class="flex flex-col gap-8 pt-2">
        <div class="flex items-center gap-2">
          <i class="pi pi-star text-3xl text-white"></i>
          <span class="text-3xl font-bold text-white">Featured Projects</span>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :stack="project.stack"
          :description="project.description"
          :img="project.img"
          :link="project.link"
          />
      </div>
    </div>
    </div>
  </section>
</template>
