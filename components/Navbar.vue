<template>
  <header class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto px-4 flex h-16 items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="font-bold text-xl">/portfolio</span>
        </NuxtLink>
      </div>
      <div class="flex items-center space-x-6">
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.href" 
            :to="item.href"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            :class="{ 'text-foreground': $route.path === item.href }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="flex items-center space-x-2">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center rounded-md p-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
            <span class="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden"
    >
      <div class="container py-4 space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="block py-2 px-3 text-base font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
          :class="{ 'bg-accent/50 text-accent-foreground': $route.path === item.href }"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projects' },
  { label: 'Stages', href: '/internships' },
  { label: 'À propos', href: '/about' },
  { label: 'Veille Technologique', href: '/veille-technologique' },
  { label: 'CV', href: '/cv' },
];
</script> 