<script setup lang="ts">
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="mx-auto min-h-screen max-w-[90%] md:max-w-[80%] flex flex-col">
    <Header></Header>
    <div class="grow">
      <RouterView></RouterView>
    </div>
    <Footer></Footer>
  </div>
</template>
