<template>
  <div class="card">
    <Timeline :value="events">
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
  </div>
</template>

<script setup>
import Timeline from 'primevue/timeline'
import { ref } from 'vue'

const events = ref([
  {
    position: 'Software Engineer Intern',
    company: 'RunSignup',
    date: 'Upcoming',
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
    active: false,
  },
  {
    position: 'Software Engineer Intern',
    company: 'Oasis Network',
    date: 'May 2025 - Dec 2025',
    description:
      'Assist in building a B2C SaaS startup utilizing Spring Boot, Python FastAPI and Vue. Helped Senior-Developers in architecting RESTful APIs, with domain driven design and efficient data handling.',
    active: false,
  },
])
</script>

<style scoped>
:deep(.p-timeline-event-opposite) {
  display: none;
}

:deep(.p-timeline-event) {
  min-height: 14rem;
}

:deep(.p-timeline-event-connector) {
  flex-grow: 1;
}
</style>
