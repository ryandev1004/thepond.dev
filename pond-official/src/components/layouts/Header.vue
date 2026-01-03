<script setup lang="ts">
import { ref } from 'vue'
import duck from '@/assets/duck.svg'
import { Drawer } from 'primevue'

const visible = ref<boolean>(false)
</script>

<template>
  <div
    class="header-blur sticky top-0 z-10 flex h-24 items-center justify-between bg-transparent p-5 pb-10 backdrop-blur-[0.125rem] select-none"
  >
    <div>
      <img :src="duck" class="duck-logo h-8 w-8" />
    </div>
    <nav>
      <ul class="hidden flex-row items-center justify-center gap-6 sm:flex">
        <li>
          <router-link :to="{ name: 'overview' }" class="text-lg" active-class="active"
            >Overview</router-link
          >
        </li>
        <li>
          <a href="/RS_Resume.pdf" target="_blank" class="text-lg">Resume</a>
        </li>
        <li>
          <router-link :to="{ name: 'about' }" class="text-lg" active-class="active"
            >About</router-link
          >
        </li>
      </ul>
      <Drawer v-model:visible="visible" position="right">
        <ul class="flex flex-col gap-6 p-4">
          <li>
            <router-link :to="{ name: 'overview' }" class="text-lg" active-class="active"
              >Overview</router-link
            >
          </li>
          <li>
            <a href="/RS_Resume.pdf" target="_blank" class="text-lg">Resume</a>
          </li>
          <li>
            <router-link :to="{ name: 'about' }" class="text-lg" active-class="active"
              >About</router-link
            >
          </li>
        </ul>
      </Drawer>
      <Button class="border-none bg-transparent p-0 sm:hidden">
        <i class="pi pi-bars text-2xl" @click="visible = true"></i>
      </Button>
    </nav>
  </div>
</template>

<style scoped>
.header-blur {
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}

.duck-logo {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(6663%)
    hue-rotate(305deg) brightness(125%) contrast(105%);
}

:deep(.p-button) {
  color: rgb(255, 255, 255);
}
</style>
