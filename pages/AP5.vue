<template>
  <div class="max-w-4xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="space-y-4">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projet</div>
      <h1 class="text-4xl font-bold tracking-tighter">Application lourde C# pour HiJobs Web</h1>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">C#</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Visual Studio 2015</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Microsoft SQL Server</span>
      </div>
    </div>

    <!-- Project Image -->
    <div class="aspect-video overflow-hidden rounded-lg border">
      <img
        src="/lourd.png"
        alt="Application Mobile Fitness"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Project Description -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Aperçu du Projet</h2>
      <div class="text-muted-foreground">
        <p>Cette application lourde C# a été développée pour administrer la plateforme HiJobs, une application web de gestion des offres d'emploi et des candidatures que j'ai précédemment créée. L'application d'administration permet aux administrateurs de :</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Gérer les offres d'emploi (création, modification, suppression)</li>
          <li>Superviser les candidatures et les candidats</li>
          <li>Administrer les comptes utilisateurs</li>
          <li>Générer des rapports et des statistiques sur l'utilisation de la plateforme</li>
          <li>Configurer les paramètres système</li>
        </ul>
        <p class="mt-2">Cette application complémentaire a été conçue pour offrir une interface robuste et performante aux administrateurs, leur permettant de gérer efficacement l'ensemble de la plateforme HiJobs depuis un poste de travail.</p>
      </div>
    </div>

    <!-- Key Features -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Fonctionnalités Clés</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
           <Icon name="mdi:add" class="h-5 w-5 text-primary" />
            <h3 class="font-semibold">Ajout d'activités</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Ajout de fonctionnalité pour ajouter des activités professionnelles à l'application HiJobs comme par exemple "Artisanat" en tant que type d'activité.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <Icon name="mdi:delete" class="h-5 w-5 text-primary" />
            <h3 class="font-semibold">Suppression d'utilisateurs</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Ajout de fonctionnalité pour supprimer des utilisateurs de l'application HiJobs.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <Icon name="mdi:eye" class="h-5 w-5 text-primary" />
            <h3 class="font-semibold">Visualisation de l'ensemble des données</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
              Ajout de fonctionnalité pour visualiser l'ensemble des données de l'application HiJobs.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <Icon name="mdi:settings" class="h-5 w-5 text-primary" />
            <h3 class="font-semibold">Configuration des paramètres</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Ajout de fonctionnalité pour configurer les paramètres de l'application HiJobs.
          </p>
        </div>
      </div>
    </div>

    <!-- Skills Acquired -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Compétences Acquises</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Développer une solution applicative</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Développement d'une application lourde en C# pour HiJobs.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Gérer le patrimoine informatique</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Gestion du patrimoine informatique pour HiJobs.
          </p>
        </div>
      </div>
    </div>

    <!-- Technical Details -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Détails Techniques</h2>
      <div class="text-muted-foreground">
        <p>L'application d'administration HiJobs a été construite en utilisant les technologies et méthodologies suivantes :</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>C# et .NET Framework pour le développement de l'application</li>
          <li>Windows Forms pour l'interface utilisateur</li>
          <li>Microsoft SQL Server et PhpMyAdmin pour la base de données</li>
          <li>SQL pour l'accès aux données</li>
          <li>Gestion des utilisateurs et des permissions</li>
        </ul>
      </div>
    </div>

    <!-- Technical Documentation -->
    <!-- <div class="space-y-4">
      <h2 class="text-2xl font-bold">Documentation Technique</h2>
      <div class="text-muted-foreground mb-4">
        <p>Consultez la documentation technique détaillée de ce projet, comprenant l'architecture de l'application, les flux de données et les guides d'implémentation.</p>
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
        <a :href="pdfUrl" download class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Télécharger la Documentation
        </a>
      </div>
      
      <div class="w-full max-w-4xl border rounded-lg shadow-sm overflow-hidden" :style="{ transform: `scale(${scale})`, transformOrigin: 'top center' }">
        <ClientOnly>
          <div v-if="isClient">
            <VuePdfEmbed :source="pdfUrl" :page="1" :width="width" />
          </div>
          <div v-else class="flex items-center justify-center h-[600px] bg-muted">
            <p>Chargement de la visionneuse PDF...</p>
          </div>
        </ClientOnly>
      </div>
    </div> -->

    <!-- Project Link -->
    

    <!-- Navigation -->
    <div class="flex justify-between pt-6">
      <NuxtLink 
        to="/AP4" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Projet Précédent
      </NuxtLink>
      <NuxtLink 
        to="/projects" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        Tous les Projets
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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