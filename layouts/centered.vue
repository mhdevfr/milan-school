<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-border">
      <div class="container flex h-16 items-center justify-between py-4">
        <NuxtLink to="/" class="font-bold text-xl">Enzo</NuxtLink>
        <div class="flex items-center gap-6">
          <nav class="flex items-center gap-6">
            <NuxtLink to="/" class="text-sm font-medium transition-colors hover:text-primary">Accueil</NuxtLink>
            <NuxtLink to="/projects" class="text-sm font-medium transition-colors hover:text-primary">AP</NuxtLink>
            <NuxtLink to="/internships" class="text-sm font-medium transition-colors hover:text-primary">Stages</NuxtLink>
            <NuxtLink to="/cv" class="text-sm font-medium transition-colors hover:text-primary">CV</NuxtLink>
            <NuxtLink to="/about" class="text-sm font-medium transition-colors hover:text-primary">à propos</NuxtLink>
            <NuxtLink to="/veille-technologique" class="text-sm font-medium transition-colors hover:text-primary">Veille Technologique</NuxtLink>
          </nav>
          <div class="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <div class="container py-8 md:py-12 lg:py-16">
        <slot />
      </div>
    </main>
    <footer class="border-t border-border">
      <div class="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div class="text-center text-sm text-muted-foreground md:text-left">
          &copy; {{ new Date().getFullYear() }} Portfolio. All rights reserved.
        </div>
        <div class="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span class="sr-only">GitHub</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <span class="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script> 