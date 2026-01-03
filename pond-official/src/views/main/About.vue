<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
</script>

<template>
  <div class="mx-auto w-full max-w-6xl">
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <div class="flex flex-col gap-8">
        <span class="py-8 text-center text-6xl font-bold text-white"
          >About</span
        >
        <span class="text-lg leading-relaxed text-white">
          Hello! I'm Ryan Sullivan. This is my personal website which currently
          only serves as my portfolio and will remain that way for the
          foreseeable future. A little bit about me, is that I'm a full-stack
          software engineer based in New Jersey, studying Computer Science at
          Rowan University. I'm 21 years old and in my free time I enjoy
          programming, watching/playing sports (especially basketball and
          football) and playing a plethora of video games (when I have the
          time). Below is some additional information about me and the website.
        </span>
        <div
          class="w-full rounded-2xl bg-red-100 pt-2 p-6 px-6"
          style="background-color: var(--p-neutral-700)"
        >
          <Accordion>
            <AccordionPanel value="0">
              <AccordionHeader>Why thepond.dev?</AccordionHeader>
              <AccordionContent>
                <p class="m-0">
                  'The Pond' started off as a nickname for an online groupchat I
                  created back in 2020. To this day, it's one of the longest
                  lasting groupchats I've been apart of and has somewhat become
                  a staple in my life along with the people that are in it. Long
                  story short, I like the name a lot, so much so I decided to
                  buy a whole domain for it and make it apart of my own personal
                  portfolio!
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
              <AccordionHeader>How did I create this website?</AccordionHeader>
              <AccordionContent>
                <p class="m-0">
                  Vue 3, TypeScript, PrimeVue, Tailwind CSS, and a few other
                  libraries. The repository for this website should be public on
                  my GitHub. If it's not-- well, reach out to me and maybe I'll
                  share it with you!
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
              <AccordionHeader>What are my goals?</AccordionHeader>
              <AccordionContent>
                <p class="m-0">
                  Well, just like everyone that is an aspiring software
                  engineer, to get a job! Beyond that, I want to continue to
                  grow my talents as a developer on all fronts and eventually be
                  able to pass that knowledge onto others. My original
                  aspirations fell in line with education, so ultimately it'd be
                  nice to be able to make that a reality in some way
                  (eventually).
                </p>
                <br />
                <p class="m-0">
                  As far as 'getting a job' goes, I would prefer to remain in
                  the web development space--but who knows. I've found interest
                  in other spaces and plan on trying to explore as much as them
                  as I can while I'm still in school. For the time being though,
                  web development is where I want to be and plan on honing my
                  talents there.
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
</template>
