<template>
    <div class="max-w-4xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="space-y-4">
        <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projet de Stage</div>
        <h1 class="text-4xl font-bold tracking-tighter">Aurion</h1>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Projet d'Équipe
          </span>
          <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Mai 2024 - Juin 2024
          </span>
        </div>
      </div>
  
      <!-- Project Image -->
      <div class="aspect-video overflow-hidden rounded-lg border">
        <img
          src="/aurion.png"
          alt="Aurion"
          class="h-full w-full object-cover"
        />
      </div>
  
      <!-- Project Description -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold">Description du Projet</h2>
        <div class="text-muted-foreground">
          <p>Durant mon stage chez Aurion, j'ai pu développer sur des plateformes e-commerce pour les aider à étendre leur activité en ligne. Le projet visait à accroître la présence en ligne de la galerie et à simplifier le processus d'organisation des expositions et des ateliers.</p>
          <p class="mt-4">Les principaux objectifs étaient de créer un site web visuellement impressionnant qui mettait en valeur le travail des artistes, d'implémenter un système de gestion de contenu pour des mises à jour faciles, de développer un système de gestion d'événements pour les ateliers et les expositions, et d'intégrer une fonctionnalité de visite virtuelle de la galerie. Travaillant dans une équipe de trois développeurs, j'étais principalement responsable du développement frontend et de l'implémentation de la galerie virtuelle.</p>
        </div>
      </div>
  
      <!-- Technologies Used -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold">Technologies Utilisées</h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <div class="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="text-sm font-medium">Nuxt 3</span>
          </div>
          <div class="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8">
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
            <span class="text-sm font-medium">Nuxt Studio</span>
          </div>
          <div class="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8">
              <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
              <line x1="2" y1="20" x2="2" y2="20"></line>
            </svg>
            <span class="text-sm font-medium">Nuxt Content</span>
          </div>
          <div class="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <span class="text-sm font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
  
      <!-- Acquired Skills -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold">Compétences Acquises</h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-lg border p-4">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <h3 class="font-semibold">Développer la présence en ligne</h3>
            </div>
            <p class="mt-2 text-sm text-muted-foreground">
              Participation à la gestion d'un service de présence en ligne en développant une plateforme numérique pour présenter les œuvres des artistes.
            </p>
          </div>
          <div class="rounded-lg border p-4">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <h3 class="font-semibold">Travailler en mode projet</h3>
            </div>
            <p class="mt-2 text-sm text-muted-foreground">
              Participation à un projet informatique en équipe avec une répartition des tâches, des revues de code et une résolution collaborative des problèmes.
            </p>
          </div>
          <div class="rounded-lg border p-4">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <h3 class="font-semibold">Développer une solution applicative</h3>
            </div>
            <p class="mt-2 text-sm text-muted-foreground">
              Conception et développement d'environnements 3D interactifs pour le web et mise en place d'une galerie virtuelle avec Nuxt 3.
            </p>
          </div>
          <div class="rounded-lg border p-4">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <h3 class="font-semibold">Organiser son développement professionnel</h3>
            </div>
            <p class="mt-2 text-sm text-muted-foreground">
              Développement de compétences techniques et collaboratives à travers l'apprentissage de nouveaux frameworks et méthodologies de travail.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Technical Documentation -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold">Documentation Technique</h2>
        <div class="rounded-lg border p-6">
          <div class="flex flex-col items-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-primary">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <h3 class="text-lg font-semibold">Documentation du Projet</h3>
            <p class="text-center text-sm text-muted-foreground">
              Documentation détaillée de la plateforme numérique, incluant l'implémentation de la galerie virtuelle 3D et du système de gestion de contenu.
            </p>
            <a href="#" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
              Voir la Documentation PDF
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Project Link -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold">Lien du Projet</h2>
        <div class="rounded-lg border p-6">
          <div class="flex flex-col items-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-primary">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <h3 class="text-lg font-semibold">Visiter le Site du Projet</h3>
            <p class="text-center text-sm text-muted-foreground">
              La plateforme numérique est maintenant utilisée par Au Coeur Des Artistes pour leurs expositions et événements.
            </p>
            <a href="https://www.aucoeurdesartistes.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
              Visiter le Site
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Navigation -->
      <div class="flex justify-between pt-6">
        <NuxtLink 
          to="/LesJoliesMancelles" 
          class="inline-flex items-center text-sm font-medium text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          Stage Précédent
        </NuxtLink>
        <NuxtLink 
          to="/internships" 
          class="inline-flex items-center text-sm font-medium text-primary"
        >
          Retour aux Stages
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed for this page
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>