<script setup lang="ts">
import Timeline from 'primevue/timeline'
import { ref } from 'vue'

interface Company {
  position: string
  company: string
  date: string
  description: string
  active: boolean
}

const companies = ref<Company[]>([
  {
    position: 'Software Engineer Co-Op/Intern',
    company: 'RunSignup',
    date: 'Current',
    description:
      'Completion of code assignments in PHP, MySQL, or JavaScript on an AWS cloud platform. Participation in team meetings and design sessions. Testing of developed software.',
    active: true,
  },
  {
    position: 'Security Analyst Intern',
    company: 'Rowan University ISO',
    date: 'Apr 2025 - Current',
    description:
      'Developed and implemented a Budget Dashboard for tracking and managing department expenses using Google Sheets and Apps Script. Conducted comprehensive security audits and vulnerability assessments to identify potential risks and recommend mitigation strategies.',
    active: true,
  },
  {
    position: 'Software Engineer (Part-Time)',
    company: 'Oasis Network',
    date: 'Dec 2025 - Current',
    description:
      'Took part in designing and building B2C SaaS startup utilizing Spring Boot and Vue. Developed full stack features used for website admin management, advanced searching and sorting, and displaying server wide metrics. Assisted in integrating professional work flows through Linear and GitHub, allowing faster and more organized code reviews and deployments.',
    active: true,
  },
  {
    position: 'Software Engineer Intern',
    company: 'Oasis Network',
    date: 'May 2025 - Dec 2025',
    description:
      'Spearheaded architecture of a REST API utilizing Python FastAPI for live status/metric checks for in-game servers. Helped Senior-Developers in architecting RESTful APIs, with domain driven design and efficient data handling.',
    active: false,
  },
])
</script>

<template>
  <Timeline :value="companies">
    <template #content="slotProps">
      <div :class="{ 'opacity-50': !slotProps.item.active }">
        <div class="flex flex-col text-white">
          <h3 class="text-md text-orange-100" style="font-weight: 500">
            {{ slotProps.item.company }}
          </h3>
          <h2 class="text-lg font-bold">{{ slotProps.item.position }}</h2>
          <p class="text-xs italic">{{ slotProps.item.date }}</p>
          <p>{{ slotProps.item.description }}</p>
        </div>
      </div>
    </template>
  </Timeline>
</template>

<style scoped>
:deep(.p-timeline-event-opposite) {
  display: none;
}

:deep(.p-timeline-event) {
  min-height: 14rem;
}

@media (max-width: 640px) {
  :deep(.p-timeline-event) {
    min-height: 20rem;
  }
}

:deep(.p-timeline-event-connector) {
  flex-grow: 1;
}
</style>
