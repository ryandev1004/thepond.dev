<script setup lang="ts"></script>

<template>
  <section class="flex items-center px-4">
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <div class="flex flex-col gap-8">
        <span class="text-4xl font-bold text-white"
          >Hi, I'm Ryan Sullivan!</span
        >
        <span class="text-2xl text-gray-100">
          I am a full-stack developer based in New Jersey pursuing a bachelor's
          degree in Computer Science at Rowan University. Currently, I am
          working at
          <a href="https://runsignup.com/" target="_blank" class="emphasis-link"
            >RunSignup</a
          >
          as a Software Engineer Intern. If you want to learn more, take a look
          through the rest of my portfolio! Additionally, feel free to connect
          with me on any of the platforms below.
        </span>
        <div class="flex flex-row justify-start gap-8 text-white">
          <a
            href="https://github.com/ryandev1004"
            target="_blank"
            class="flex items-center gap-2"
          >
            <i class="pi pi-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-sullivan-524810299/"
            target="_blank"
            class="flex items-center gap-2"
          >
            <i class="pi pi-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:ryansullivannj@gmail.com"
            class="flex items-center gap-2"
          >
            <i class="pi pi-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
