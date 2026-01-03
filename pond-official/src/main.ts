import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router/routes'

const app = createApp(App)

const ThePond = definePreset(Aura, {
  components: {
    card: {
      root: {
        background: '{neutral-700}',
      },
    },
    drawer: {
      root: {
        background: '{neutral-800}',
      },
    },
    accordion: {
      panel: {
        borderColor: '{neutral-600}',
      },
      header: {
        background: '{neutral-700}',
        hoverBackground: '{neutral-700}',
        activeBackground: '{neutral-700}',
        activeHoverBackground: '{neutral-700}',
      },
      content: {
        background: '{neutral-700}',
      },
    },
  },
})

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(PrimeVue, {
  theme: {
    preset: ThePond,
    options: {
      darkModeSelector: '.dark-mode',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})

app.mount('#app')
