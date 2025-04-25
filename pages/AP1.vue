<template>
  <div class="max-w-4xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="space-y-4">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projet BTS SIO</div>
      <h1 class="text-4xl font-bold tracking-tighter">Site WordPress</h1>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">WordPress</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">CMS</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">SQL</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">PhpMyAdmin</span>
      </div>
    </div>

    <!-- Project Image -->
    <div class="aspect-video overflow-hidden rounded-lg border">
      <img
        src="/wordpress.png"
        alt="Site WordPress"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Project Description -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Aperçu du Projet</h2>
      <div class="text-muted-foreground">
        <p>Lors de ce premier projet de BTS SIO, j'ai appris à utiliser l'outil WordPress pour créer un site web complet. L'objectif du projet était de mettre en place un site WordPress en copiant un site web existant. Le projet m'a permis de me familiariser avec l'écosystème WordPress, la gestion de contenu, l'installation et la configuration de thèmes et plugins, </p>
      </div>
    </div>

    <!-- Key Features -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Fonctionnalités Clés</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Thème Personnalisé</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Personnalisation d'un thème WordPress pour répondre aux exigences spécifiques du projet et créer une identité visuelle identique au site original.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Extensions Intégrées</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Sélection et configuration de plugins WordPress pour étendre les fonctionnalités du site selon les besoins du projet.
          </p>
        </div>
        
      </div>
    </div>

    <!-- Skills Acquired -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Compétences en lien avec le projet</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        
        
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Répondre aux incidents et aux demandes d’assistance et d’évolution</h3>
          </div>
          <ul class="mt-2 text-sm text-muted-foreground">
            <li>Collecter, suivre et orienter des demandes</li>
            <li>Traiter des demandes concernant les services réseau et système, applicatifs</li>
            <li>Traiter des demandes concernant les applications</li>
          </ul>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Mettre à disposition des utilisateurs un service informatique</h3>
          </div>
          <ul class="mt-2 text-sm text-muted-foreground">
            <li>Réaliser les tests d’intégration et d’acceptation d’un service</li>
            <li>Déployer un service</li>
            <li>Accompagner les utilisateurs dans la mise en place d’un service</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Project Timeline -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Période du Projet</h2>
      <div class="text-muted-foreground">Septembre 2023 - Octobre 2023</div>
    </div>

    <!-- Technical Details -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Détails Techniques</h2>
      <div class="text-muted-foreground">
        <p>Le site WordPress a été construite en utilisant les technologies et méthodologies suivantes :</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>WordPress pour la création du site</li>
          <li>Plugins WordPress pour les fonctionnalités avancées</li>
        </ul>
      </div>
    </div>

    <!-- Technical Documentation -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Documentation Technique</h2>
      <div class="text-muted-foreground">
        <p>La documentation technique du projet comprend :</p>
        <ul class="list-disc pl-5 mt-2">
          <li>Guide d'installation et de configuration de WordPress</li>
          <li>Documentation des plugins utilisés et leurs configurations</li>
          <li>Structure de la base de données et relations entre les tables</li>
          <li>Guide de personnalisation du thème</li>
        </ul>
      </div>
      
      <div class="flex flex-wrap items-center justify-center gap-4 mb-6">
        <button @click="zoomIn" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Zoom +
        </button>
        <button @click="zoomOut" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Zoom -
        </button>
        <button @click="resetZoom" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path><path d="M14 8H8v6h6"></path></svg>
          Réinitialiser
        </button>
        <a href="/Herbe_Notice.pdf" download class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Télécharger la Documentation
        </a>
      </div>
      
      <div class="w-full max-w-4xl border rounded-lg shadow-sm overflow-hidden" :style="{ transform: `scale(${scale})`, transformOrigin: 'top center' }">
        <ClientOnly>
          <div v-if="isClient">
            <VuePdfEmbed source="/Herbe_Notice.pdf" :page="1" :width="width" />
          </div>
          <div v-else class="flex items-center justify-center h-[600px] bg-muted">
            <p>Chargement de la visionneuse PDF...</p>
          </div>
        </ClientOnly>
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
          <h3 class="text-lg font-semibold">Visiter le Site</h3>
          <p class="text-center text-sm text-muted-foreground">
            Découvrez la démo en direct de la plateforme e-commerce.
          </p>
          <a href="https://sites.google.com/site/stcxscis" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
            Voir la Démo
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
        to="/projects" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Retour aux Projets
      </NuxtLink>
      <NuxtLink 
        to="/AP2" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        Projet Suivant
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';

const pdfUrl = '/docs/AP1-documentation.pdf';
const scale = ref(1);
const width = ref(800);
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
  // Adjust width based on screen size
  updateWidth();
  window.addEventListener('resize', updateWidth);
});

function updateWidth() {
  const containerWidth = Math.min(window.innerWidth - 40, 800);
  width.value = containerWidth;
}

function zoomIn() {
  scale.value = Math.min(scale.value + 0.1, 2);
}

function zoomOut() {
  scale.value = Math.max(scale.value - 0.1, 0.5);
}

function resetZoom() {
  scale.value = 1;
}
</script>

<style scoped>
/* Add any custom styles here */
</style>