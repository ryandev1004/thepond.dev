<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
</script>

<template>
  <div class="mx-auto w-full max-w-6xl">
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <div class="flex flex-col gap-8">
        <span class="py-6 text-center text-6xl font-bold text-white"
          >About</span
        >
        <span class="text-lg leading-relaxed text-white">
          This is my portfolio website where you can keep up to date with my
          latest work, acomplishments, and more! I wanted to make this to have
          an easier way to showcase everything I've worked on, as well as give
          myself something to tinker with to improve my overall design and web
          development skills. Below are some potential questions you may have
          when loading this website, but if you have others feel free to reach
          out to me!
        </span>
        <div
          class="w-full rounded-2xl bg-red-100 p-6 px-6 pt-2"
          style="background-color: var(--p-neutral-700)"
        >
          <Accordion>
            <AccordionPanel value="0">
              <AccordionHeader> Why thepond.dev? </AccordionHeader>
              <AccordionContent>
                <p class="m-0">
                  Truthfully, I wanted to add a little flare to my domain name
                  rather than just using my name. "The Pond" is reference to an
                  discord server I made for my friends and I back during COVID.
                  It was during that time was when I began my developer journey,
                  so I figured I'd pay homage to that period of time in my life.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
              <AccordionHeader>How did I create this website?</AccordionHeader>
              <AccordionContent>
                <p class="m-0">
                  Vue 3, TypeScript, PrimeVue, Tailwind CSS, and a few other
                  libraries. The repository for this website should be public on
                  my GitHub.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
              <AccordionHeader>What are my goals?</AccordionHeader>
              <AccordionContent>
                <p class="m-0">
                  Outside of graduating with my degree and securing a job, I
                  really want to improve myself as a developer. The idea of
                  having the ability to create my own large-scale projects is
                  something that interests me, and I'd like to be able to use my
                  skills not just for work, but for my own enjoyment.
                </p>
                <br />
                <p class="m-0">
                  In a way this website is a good way of tracking my progress,
                  so I look forward to see how it evolves over time as I learn
                  new things and work in new places!
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
</template>
