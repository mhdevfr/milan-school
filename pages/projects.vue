<template>
  <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="space-y-4 mb-8">
      <h1 class="text-4xl font-bold tracking-tighter">Mes Projets</h1>
      <p class="text-xl text-muted-foreground">
        Découvrez les projets personnels et académiques que j'ai réalisés
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <div v-for="project in projects" :key="project.id" class="group relative overflow-hidden rounded-lg border">
        <div class="aspect-video w-full overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div class="p-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {{ project.category }}
            </span>
            <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              {{ project.date }}
            </span>
          </div>
          <h3 class="text-2xl font-bold">{{ project.title }}</h3>
          <p class="mt-2 line-clamp-3 text-muted-foreground">
            {{ project.description }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.technologies" :key="tech" class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              {{ tech }}
            </span>
          </div>
          <NuxtLink 
            :to="project.route" 
            class="mt-4 inline-flex items-center text-sm font-medium text-primary"
          >
            Voir les Détails du Projet
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Données des projets
const projects = [
  {
    id: '0',
    title: 'SCIS',
    category: 'Web App',
    date: '2023',
    image: '/wordpress.png',
    description: 'Introduction au développement web avec WordPress en copiant un site web existant...',
    technologies: ['WordPress', 'CMS', 'SQL', 'PhpMyAdmin'],
    route: '/AP1'
  },
  {
    id: '1',
    title: 'Site web Quiconces',
    category: 'Web App',
    date: '2023',
    image: '/quiconces.png',
    description: 'Un site web fictif pour les Quinconces de la ville du Mans avec un CMS...',
    technologies: ['Framer', 'CMS'],
    route: '/AP2'
  },
  {
    id: '2',
    title: 'Projet Personnages',
    category: 'Web App',
    date: '2024',
    image: '/superheros.png',
    description: 'Un site web basé sur différents univers de personnages comme Star Wars DC et Marvel...',
    technologies: ['PHP', 'PhpMyAdmin', 'Bootstrap', 'Javascript', 'SQL', 'HTML'],
    route: '/AP3'
  },
  {
    id: '3',
    title: 'HiJobs',
    category: 'Web App',
    date: '2024-2025',
    image: '/hijobs.png',
    description: 'Un site web de recherche d\'emploi pour les étudiants, avec un système de chat et de messagerie...',
    technologies: ['PHP', 'PhpMyAdmin', 'Tailwind CSS', 'Javascript'],
    route: '/AP2'
  },

 
  {
    id: '5',
    title: 'Application Lourde c#',
    category: 'Application Bureau',
    date: '2025',
    image: '/application_lourde.png',
    description: 'Application lourde en C# avec une base de données SQL pour une gestion administrative d\'une entreprise...',
    technologies: ['C#', 'SQL', 'PhpMyAdmin'],
    route: '/AP5'
  }
];
</script> 