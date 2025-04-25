<template>
  <div class="container mx-auto px-4 space-y-12 max-w-7xl h-full flex flex-col items-center">
    <section class="flex items-start justify-between space-y-4 text-center py-12 md:py-20 w-full">
      <div class="flex flex-col items-start justify-center w-full h-full  text-center">
        
      <h1 class="text-[100px] font-bold tracking-tighter ">
        Milan Herbé.
      </h1>

      <h2 class="text-2xl underline  font-bold tracking-tighter">
        Développeur Full Stack
      </h2>
      <p class="w-full text-muted-foreground text-start">
        Un étudiant passionné en informatique spécialisé dans le développement web et mobile.
      </p>
      <div class="flex  items-center justify-end w-full h-full space-x-2  text-center">
        <a href="https://github.com/mhdevfr/" class="text-2xl underline  font-bold tracking-tighter">
          <Icon name="uil:github" />
        </a>
        <a href="https://www.linkedin.com/in/milanherbe/" class="text-2xl underline  font-bold tracking-tighter">
          <Icon name="uil:linkedin" />
        </a>
        <a href="https://portfolio.milanherbe.com" class="text-2xl underline  font-bold tracking-tighter">
          <Icon name="mdi:web"></Icon>
        </a>
      </div>
    </div>
      <div class="flex flex-wrap w-full flex-row items-end h-full justify-end gap-4">
        <div class="mx-auto overflow-hidden w-96 h-96 rounded-full border-4 border-gray-200 shadow-lg">
          <img src="/milan.webp" alt="Logo" class="w-full h-full object-cover object-center" />
        </div>
      </div>
    </section>

    <section class="space-y-6 flex flex-col items-center">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full" >
        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <div class="flex items-center space-x-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 class="font-semibold">Développement Frontend</h3>
          </div>
          <p class="mt-3 text-sm text-muted-foreground">
            Création d'interfaces web responsives et accessibles en utilisant des frameworks modernes.
          </p>
          <div class="flex items-center w-full justify-around mt-4">
            <Icon name="material-icon-theme:vue" class="w-10 h-10" ></Icon>
            <Icon name="material-icon-theme:nuxt" class="w-10 h-10" ></Icon>
            <Icon name="devicon:tailwindcss" class="w-10 h-10" ></Icon>
            <Icon name="devicon:sass" class="w-10 h-10" ></Icon>
            <Icon name="devicon:bootstrap" class="w-10 h-10" ></Icon>
            <Icon name="devicon:javascript" class="w-10 h-10" ></Icon>
            <Icon name="devicon:typescript" class="w-10 h-10" ></Icon>
            
          </div>
        </div>
        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <div class="flex items-center space-x-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5"></path>
                <path d="M2 14.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5"></path>
                <rect x="2" y="9.5" width="20" height="5" rx="0.5"></rect>
              </svg>
            </div>
            <h3 class="font-semibold">Développement Backend</h3>
          </div>
          <p class="mt-3 text-sm text-muted-foreground">
            Développement d'applications serveur robustes et d'APIs pour alimenter les applications web.
          </p>
          <div class="flex items-center w-full justify-around mt-4">
            <Icon name="devicon:nodejs" class="w-10 h-10" ></Icon>
            <Icon name="devicon:php" class="w-10 h-10" ></Icon>
            <Icon name="devicon:express" class="w-10 h-10" ></Icon>
            <Icon name="devicon:mysql" class="w-10 h-10" ></Icon>
            <Icon name="devicon:postgresql" class="w-10 h-10" ></Icon>
          </div>
        </div>
        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <div class="flex items-center space-x-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3 class="font-semibold">Design UI/UX</h3>
          </div>
          <p class="mt-3 text-sm text-muted-foreground">
            Conception d'interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.
          </p>
          <div class="flex items-center w-full justify-around mt-4">
            <Icon name="devicon:figma" class="w-10 h-10" ></Icon>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 
<script setup lang="ts">
</script>