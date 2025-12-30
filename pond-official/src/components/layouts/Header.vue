<script setup lang="ts">
import duck from '@/assets/duck.svg'
</script>

<template>
  <div
    class="sticky top-0 z-10 flex h-24 items-center justify-between bg-transparent p-5 pb-10 backdrop-blur-[0.125rem] select-none header-blur"
  >
    <nav>
      <img :src="duck" class="duck-logo h-8 w-8" />
    </nav>
    <nav>
      <ul class="flex flex-row items-center justify-center gap-6">
        <li>
          <router-link :to="{ name: 'overview' }" class="text-lg"
            >Overview</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'overview' }" class="text-lg"
            >Resume</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'overview' }" class="text-lg"
            >About</router-link
          >
        </li>
      </ul>
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
</style>
